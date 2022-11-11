import React from 'react'
import CartItem from './CartIem'
const Product = ({ data }) => {
  return (
    <div>
      <CartItem data={data} />
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">$100</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$500</div>
      </section>
    </div>
  )
}

export default Product
