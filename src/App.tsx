import React, {useState} from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      </div>
      <div>
        <button onClick={() => setCount(prevCount => prevCount - prevCount)}>Reset</button>    
      </div>
      <div>
        <button onClick={() => setCount(prevCount => prevCount * 2)}>x2</button>    
      </div>
      <div>
        <button onClick={() => setCount(prevCount => prevCount % 3 === 0 ? prevCount / 3 : prevCount)}>3の倍数の時だけ3で割る</button>    
      </div>
    </>
  )
}

export default App

