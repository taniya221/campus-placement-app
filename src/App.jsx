import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './Components/AddReg'
import DeleteReg from './Components/DeleteReg'
import SearchReg from './Components/SearchReg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewReg from './Components/ViewReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddReg />} />
      <Route path="/search" element={<SearchReg />} />
      <Route path="/delete" element={<DeleteReg />} />
      <Route path="/view" element={<ViewReg />} />
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
