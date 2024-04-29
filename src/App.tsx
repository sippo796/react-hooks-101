import { useEffect, useState } from "react"

type Props = {
  name: string;
  price: number;
}

const App = (defaultProps: Props) => {

  const [state, setState] = useState(defaultProps)
  const { name, price } = state

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })

  useEffect(() => {
    console.log('This is like componentDidMount.')
  }, [name])

  const renderPeriod = () => {
    // console.log('renderPeriod renders period.')
    return '。'
  }

  return (
    <>
      <p>現在の[{name}]は{price}円です{renderPeriod()}</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(defaultProps)}>Reset</button>
      <input value={name} onChange={(e) => setState({...state, name:e.target.value})} />
    </>
  )
}

export default App

