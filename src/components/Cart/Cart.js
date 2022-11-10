import React from 'react'
import Product from './Product'

// 產品資訊
const productData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const Cart = () => {
  return (
    <div className="col col-lg-5 col-sm-12">
      {/* cart  */}
      <section className="cart-container col col-lg-12 col-sm-12">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
          <Product data={productData} />
        </section>
      </section>
    </div>
  )
}

export default Cart
