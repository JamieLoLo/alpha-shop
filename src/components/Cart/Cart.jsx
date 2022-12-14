import React, { useContext, useEffect } from 'react'
import CartItem from './CartIem'
import { CartContext } from '../../contexts/CartContext'
import { FormContext } from '../../contexts/FormContext'

const Cart = () => {
  const { products, setProducts } = useContext(CartContext)

  const handleAddQuantity = (productID) => {
    setProducts(
      products.map((p) => {
        if (p.id === productID) {
          return {
            ...p,
            quantity: p.quantity + 1,
          }
        } else {
          return p
        }
      })
    )
  }

  const handleMinusQuantity = (productID) => {
    let nextProducts = products.map((p) => {
      if (p.id === productID) {
        return {
          ...p,
          quantity: p.quantity - 1,
        }
      } else {
        return p
      }
    })
    nextProducts = nextProducts.filter((p) => p.quantity > 0)
    setProducts(nextProducts)
  }
  // console.log(products)
  return (
    <div className="col col-lg-5 col-sm-12">
      {/* cart  */}
      <section className="cart-container col col-lg-12 col-sm-12">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
          {products.map((item) => {
            return (
              <CartItem
                {...item}
                handleAddQuantity={handleAddQuantity}
                handleMinusQuantity={handleMinusQuantity}
                key={item.id}
              />
            )
          })}
        </section>

        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>

        <CalculateTotalPrice products={products} />
      </section>
    </div>
  )
}

// 用來計算金額的函式
const CalculateTotalPrice = ({ products }) => {
  const { formData, setFormData } = useContext(FormContext)

  let totalPrice = 0
  products.map((p) => (totalPrice += p.quantity * p.price))
  useEffect(() => {
    let key = 'totalPrice'
    setFormData({ ...formData, [key]: totalPrice })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPrice])

  return (
    <section className="cart-info total col col-12">
      <div className="text">小計</div>
      <div className="price">
        {totalPrice === 0 ? '您的購物車是空的' : totalPrice}
      </div>
    </section>
  )
}

export default Cart
