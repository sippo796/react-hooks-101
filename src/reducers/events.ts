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

import { ActionTypes } from "../actions"

export type State = {
  id: number,
  title?: string,
  body?: string,
  description?: string,
  operatedAt?: string,
}

export type Action = {
  actionType: string,
  state: State,
}

const events = (state:State[] | undefined, action: Action):State[] => {
  console.log({state, action})
  switch(action.actionType) {
    case ActionTypes.CREATE_EVENT:
      {
        const newState:State = {
          ...action,
          id:action.state.id,
          description: action.state.description,
          operatedAt: action.state.operatedAt
        }
        if(state){
          return [newState, ...state] 
        }else{
          return [newState]
        }
      }
    case ActionTypes.DELETE_EVENT:
      {
        if(state){
          return state.filter(event => event.id !== action.state?.id)
        }
        else{
          return []
        }
      }
    case ActionTypes.DELETE_ALL_EVENTS:
      return []
    default:
      return []
  }

}

export default events