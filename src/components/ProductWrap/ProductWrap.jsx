import React from "react";
import s from "./Product.module.scss";

const Product = ({ product }) => {
  return (
    <>
      <section className={s.Productwrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.images}>
              <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>

              <img src={product.image} alt="" />
            </div>

            <div className={s.box}>
              <div>
                <h2>{Product.name}</h2>
                <h3>⭐⭐⭐⭐ 4.5</h3>
                <div className={s.price}>
                  <b>{product.price} Сум</b>
                  <s>{Math.floor(product.price * 1.1)} Сум</s>
                </div>

                <p className={s.text}>
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>

              <div className={s.select}>
                <p>Select Colors</p>

                <div className={s.colors}>
                  <div className={s.div1}>
                    <img src="/Frame.png" alt="" />
                  </div>
                  <div className={s.div2}></div>
                  <div className={s.div3}></div>
                </div>
              </div>

              <div>
                <p className={s.size}>Choose Size</p>

                <div className={s.btns}>
                  <button>Small</button>
                  <button>Medium</button>
                  <button>Large</button>
                  <button>X-Large</button>
                </div>
              </div>

              <div className={s.cart}>
                <div className={s.count}>
                  <button className={s.btn1}>-</button>
                  <p>1</p>
                  <button className={s.btn2}>+</button>
                </div>

                <button className={s.add}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
