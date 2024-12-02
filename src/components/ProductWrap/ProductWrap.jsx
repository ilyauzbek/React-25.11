import React from 'react'
import s from './Product.module.scss'

const Product = ({ Product }) => {
  return (
    <>
    <section className={s.Productwrap}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.images}>

                    <div>
                        <img src={Product.image} alt="" />
                        <img src={Product.image} alt="" />
                        <img src={Product.image} alt="" />
                    </div>

                    <img src={Product.image} alt="" />
                </div>

                <div className={s.box}>
                    <div>
                        <h2>{Product.name}</h2>
                        <h3>⭐⭐⭐⭐ 4.5</h3>
                        <div className={s.price} >
                            <b>{Product.price} cum</b>
                            <s>{Math.floor(Product.price * 1.1)} cum</s>
                        </div>

                        <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    </div>

                    <div>
                        <p>Select Colors</p>

                        <div className={s.colors}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div>
                        <p>Choose Size</p>

                        <div className={s.btns}>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                        </div>
                    </div>


                    <div>
                        <div className={s.count}>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>

                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Product