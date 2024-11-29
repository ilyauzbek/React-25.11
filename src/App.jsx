import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Brands from './components/Brands/Brands'


const App = () => {
  return (
    <>
      <Header/>

      
      
    <Routes>
      <Route path='/'  element={<Home />}/>

    </Routes>



    <Brands/>
    </>
  )
}

export default App