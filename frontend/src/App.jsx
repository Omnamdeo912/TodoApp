import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodo></CreateTodo>
    </>
  )
}

export default App
