import React from 'react'
import './Catalog.scss'

const Catalog = () => {
  return (
    <>

    <section className="catalog__wrapper">
            <h2 className='new'>NEW ARRIVALS</h2>

            <div className="catalog__cards">
                <div className="catalog__card">
                    <img src="/image 7.png" alt="" />
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <h4>$120</h4>

                </div>
                <div className="catalog__card">
                    <img src="/image 8.png" alt="" />
                    <p>SKINNY FIT JEANS</p>
                    <h4>$240</h4>

                </div>
                <div className="catalog__card">
                    <img src="/image 9.png" alt="" />
                    <p>CHECKERED SHIRT</p>
                    <h4>$180</h4>

                </div>
                <div className="catalog__card">
                    <img src="/image 10.png" alt="" />
                    <p>SLEEVE STRIPED T-SHIRT</p>
                    <h4>$160</h4>

                </div>
            </div>

            <div className="vief">
            <button>View All</button>
            </div>
    </section>
    </>
  )
}

export default Catalog