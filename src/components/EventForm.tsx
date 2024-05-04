import React, { useState } from 'react';
import { Action, State } from '../reducers'


type Props = {
  state: State[],
  dispatch: React.Dispatch<Action>,
}
const EventForm = ({state, dispatch}:Props) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const unCreatable = title === '' || body === ''

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    if(dispatch){
      dispatch({
        type: 'CREATE_EVENT',
        payload: {
          id:0,
          title,
          body,
        },
      })
    }
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if(result){
      dispatch({
        type: 'DELETE_ALL_EVENTS',
        payload: {
          id: 0,
        }
      })
    }
  }

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className='btn btn-danger' onClick={deleteAllEvents} disabled={state?.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  );
}

export default EventForm;