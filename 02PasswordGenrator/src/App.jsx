import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [length, setlength] = useState(8)

  const [NumberAllowed , setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState(" ")

  const passwordGenerator =() =>{
    
  }
  return (
    <>
      <h1>password Generator</h1>

    </>
  )
}

export default App
