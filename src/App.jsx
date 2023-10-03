import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'

import './App.css'

const App = ()=>{  
  return (
    <>
     <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
