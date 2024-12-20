import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SinglePage from './pages/SinglePage'
import Cart from './pages/Cart'




const App = () => {
  return (
    <>
      <Header/>

      
      
    <Routes>
      <Route path='/'  element={<Home />}/>

      <Route path='/product/:id' element={<SinglePage />}/>

      <Route path='/Cart' element={<Cart/>}/>

    </Routes>



    
    </>
  )
}

export default App