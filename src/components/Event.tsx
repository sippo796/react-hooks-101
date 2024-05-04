import React from "react"
import { Action, State } from "../reducers"
import { DELETE_EVENT } from "../actions"

const Event = ({dispatch, event}: {dispatch: React.Dispatch<Action>, event: State}) => {
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${event.id})を本当に削除しても良いですか？`)
    if(result) {
      dispatch({
        type: DELETE_EVENT,
        payload: {
          id: event.id,
        },
      })
    }
  }
  
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )                          
}

export default Event
