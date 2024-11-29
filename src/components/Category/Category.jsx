import React from 'react'
import s from './Category.module.scss'


import Casrd from '../Card/Casrd'
import Products from '/public/products.json'

const Category = () => {
  return (
    <>
        <div className="container">

            <div className={s.wrapper}>

                {Products.map(card => (
                    <Casrd key={card.id} image={card.image} name={card.name} price={card.price}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Category