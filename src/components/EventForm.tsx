import React, { useContext, useState } from 'react';
import { ActionTypes } from '../actions';
import AppContext from '../contexts/AppContext';

const EventForm = () => {
  const {state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const unCreatable = title === '' || body === ''

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    if(dispatch){
      dispatch({
        actionType: ActionTypes.CREATE_EVENT,
        state: {
          id: state ? state.length === 0 ? 1 : state[state.length - 1].id + 1 : 1,
          body,
          description: `イベント(id=${state ? state.length === 0 ? 1 : state[state.length - 1].id + 1 : 1})を作成しました`,
          operatedAt: new Date().toLocaleString(),
          title,
        },
      })
      setTitle('')
      setBody('')
    }
  }

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if(result){
      dispatch({
        actionType: ActionTypes.DELETE_ALL_EVENTS,
        state: {
          id: -1,
          description: '全てのイベントを削除しました',
          operatedAt: new Date().toLocaleString(),
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