import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="section">
      <div className="conatiner">
       <div className="hero__wrapper">
       <div className="hero__find">
        <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>

        <div className="hero__plus">
          <div className="hero__200">
            <h3>200+</h3>
            <p>International Brands</p>
          </div>

          <div className="hero__200">
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
          </div>

          <div className="hero__200">
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </div>

        </div>
       </div>

       <img src="/hero-img (2).png" alt="" />
       </div>
      </div>
    </section>
    </>
  )
}

export default Hero