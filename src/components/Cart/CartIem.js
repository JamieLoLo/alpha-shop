import React from 'react'
// 引入購物車加號減號的 svg 圖檔
import { ReactComponent as MinusIcon } from '../icons/minus.svg'
import { ReactComponent as PlusIcon } from '../icons/plus.svg'

const CartItem = ({
  id,
  name,
  img,
  price,
  quantity,
  handleAddQuantity,
  handleMinusQuantity,
}) => {
  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
      key={id}
    >
      <img className="img-container" src={img} alt="" />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <MinusIcon
              className="product-action minus"
              onClick={() => {
                handleMinusQuantity(id)
              }}
            />
            <span className="product-count">{quantity}</span>
            <PlusIcon
              className="product-action plus"
              onClick={() => {
                handleAddQuantity(id)
              }}
            />
          </div>
        </div>
        <div className="price">${price * quantity}</div>
      </div>
    </div>
  )
}

export default CartItem
