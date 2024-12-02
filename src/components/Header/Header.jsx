import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="header">
       
            <nav className="nav">
                <Link to={'/'} className="logo">SHOP.CO</Link>

                <div className="menu">
                    <Link>Shop</Link>
                    <Link>On Sale</Link>
                    <Link>New Arrivals</Link>
                    <Link>Brands</Link>
                </div>


                <input className="search" type="text" placeholder='Search for products...' />


                <div className="box">
                    <img src="/icon-1 (4).svg" alt="" />
                    <img src="/icon-2 (4).svg" alt="" />
                </div>


            </nav>
       
    </header>
  
    
    </>
  )
}

export default Header