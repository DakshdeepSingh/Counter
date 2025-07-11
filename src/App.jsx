import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <p>
          Value: {count}
        </p>
        <button onClick={() => {
          if (count > 0) setCount((count) => count - 1) ;
        }}>
          −
        </button>
        <button onClick={() => setCount((count) => 0)}>
          ↻
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  )
}

export default App
