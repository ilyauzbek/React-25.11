import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Product from './pages/Product'


const App = () => {
  return (
    <>
      <Header/>

      
      
    <Routes>
      <Route path='/'  element={<Home />}/>
      <Route path='/'  element={<Product/>}/>

    </Routes>



    
    </>
  )
}

export default App