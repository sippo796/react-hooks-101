import { useContext } from "react"
import { State } from "../reducers"
import { DELETE_EVENT } from "../actions"
import AppContext from "../contexts/AppContext"

type Props = {
  state: State;
}
const Event = ({state} : Props) => {
  const {dispatch} = useContext(AppContext)

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${state.id})を本当に削除しても良いですか？`)
    if(result) {
      dispatch({
        type: DELETE_EVENT,
        payload: {
          id: state.id,
        },
      })
    
  }
  }
  
  return (
    <tr>
      <td>{state.id}</td>
      <td>{state.title}</td>
      <td>{state.body}</td>
      <td><button className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )                          
}
export default Event;
