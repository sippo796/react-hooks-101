import 'bootstrap/dist/css/bootstrap.min.css'
import eventReducerfunc, {State} from '../reducers/events'
import { useReducer } from 'react'
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'

const App = () => {
  const initialState : State[] = []
    
  const [state, dispatch] = useReducer(eventReducerfunc, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
          <EventForm />
          <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App
