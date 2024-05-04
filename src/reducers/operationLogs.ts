import {
  ActionTypes
} from '../actions'
import { Action, State } from './events'

const operationLogs = (state:State[] | undefined, action:Action):State[] => {

  console.log(action.actionType)
  switch(action.actionType){
    case ActionTypes.ADD_OPERATION_LOG:
      {
        const newState:State = {
          body: action.state.body,
          title: action.state.title,
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
    case ActionTypes.DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state ? state : [];
  }
}

export default operationLogs
