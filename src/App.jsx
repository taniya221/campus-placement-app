import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './Components/AddReg'
import DeleteReg from './Components/DeleteReg'
import SearchReg from './Components/SearchReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddReg />
      <DeleteReg />
      <SearchReg />
    </>
  )
}

export default App
