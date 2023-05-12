import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <div className="flex justify-center flex-col gap-y-3">
          <h1> Archetype Project </h1>
          <h2> Powered by </h2>
        </div>
        
        <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={tailwindLogo} className="logo react" alt="React logo" />
        </a>  
        </div>
        
      </div>
      <h2 className="text-slate-300 font-bold">Vite + React + Tailwind</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        Button
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
