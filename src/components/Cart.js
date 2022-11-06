import React from 'react'
import { ReactComponent as MinusIcon } from './icons/minus.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import product1 from './images/product-1.jpg'
import product2 from './images/product-2.jpg'

const Cart = () => {
  return (
    <div className="col col-lg-5 col-sm-12">
      {/* cart  */}
      <section className="cart-container col col-lg-12 col-sm-12">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="3999"
          >
            <img className="img-container" src={product1} alt="" />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <MinusIcon className="product-action minus" />
                  <span className="product-count">1</span>
                  <PlusIcon className="product-action plus" />
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="1299"
          >
            <img className="img-container" src={product2} alt="" />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <MinusIcon className="product-action minus" />
                  <span className="product-count">1</span>
                  <PlusIcon className="product-action plus" />
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
        </section>

        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">$2,999</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">$1,999</div>
        </section>
      </section>
    </div>
  )
}

export default Cart
