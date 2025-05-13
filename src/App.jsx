import React from 'react'
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Sample from './components/Sample'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    {/* <h1>This is my React Application</h1> */}
    <Home/>
    {/* <About/> */}
    {/* <Sample/> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    
    <Routes>
    
      <Route path='/' element={<About/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Sample' element={<Sample/>}></Route>

      
    </Routes>

    </div>
  )
}

export default App
