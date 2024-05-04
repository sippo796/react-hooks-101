// action = {
//   type: 'CREATE_EVENT',
//   title: '2020年東京オリンピックのお知らせ',
//   body: '2020年東京オリンピックを開催します！つきましては、、、',
// }
// # before
// state = []
// # after
// state = [
//   {id: 1, title: '2020年東京オリンピックのお知らせ', body: '2020年東京オリンピックを開催します！つきましては、、、'},
// ]
// # before
// state = [
//   {id: 1, title: 'タイトル1', body: 'ボディ1'},
//   {id: 2, title: 'タイトル2', body: 'ボディ2'},
//   {id: 3, title: 'タイトル3', body: 'ボディ3'},
// ]
// # after
// state = [
//   {id: 1, title: 'タイトル1', body: 'ボディ1'},
//   {id: 2, title: 'タイトル2', body: 'ボディ2'},
//   {id: 3, title: 'タイトル3', body: 'ボディ3'},
//   {id: 4, title: '2020年東京オリンピックのお知らせ', body: '2020年東京オリンピックを開催します！つきましては、、、'},
// ]

import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from "../actions"

export type State = {
  id: number,
  title?: string,
  body?: string,
}

export type Action = {
  type: string,
  payload: State
}

const events = (state:State[], action:Action) => {
  switch(action.type) {
    case CREATE_EVENT:
      {
        const event = { title: action.payload.title, body: action.payload.body }
        const length = state.length
        const id = length === 0 ? 1 : state[length - 1].id + 1
        return [...state, {id, ...event}]
      }
    case DELETE_EVENT:
      {
        return state.filter(event => event.id !== action.payload.id)
      }
    case DELETE_ALL_EVENTS:
      return []
    default:
      return state
  }

}

export default events