import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { useState } from 'react'

function App() {
  const [sidebar,setSidebar]= useState(true)
  return (
    <>
  <Navbar setSidebar={setSidebar}/>  
    <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/>} />
    <Route path='/video/:categoryId/:videoId' element={<video/>} />
    </Routes>
    </>
  )
}

export default App
