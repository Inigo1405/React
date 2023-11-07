import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Personajes } from './components/Personajes'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("Hola")
  }, [count]) // Especifica que cambio esperar

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2></h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar
        </button>


        <p>{count}</p>
        
        <Personajes/>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
