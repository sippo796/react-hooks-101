import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import { useReducer, useState } from 'react'

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log({title, body})
    
    dispatch({
      type: 'CREATE_EVENT',
      payload: {
        id:0,
        title,
        body,
      },
    })

    setTitle('')
    setBody('')
  }

  console.log({state})

  return (
    <div className="container-fluid">
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

          <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
          <button className='btn btn-danger'>全てのイベントを削除する</button>
        </form>

        <h4>イベント一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>タイトル1</td>
              <td>ボディ1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>タイトル2</td>
              <td>ボディ2</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default App
