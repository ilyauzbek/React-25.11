import React from 'react'
import s from './Category.module.scss'


import Casrd from '../Card/Casrd'
import Products from '/public/products.json'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
        <div className="container">

            <div className={s.wrapper}>

                {Products.map(card => (
                   <Link  key={card.id} to={`/product/${card.id}`}  className='{s.link}'>
                    <Casrd  image={card.image} name={card.name} price={card.price}/>
                   </Link>
                ))}
            </div>
        </div>
    </>
  )
}

export default Category