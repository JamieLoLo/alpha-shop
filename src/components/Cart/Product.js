import React from 'react'
// 引入購物車加號減號的 svg 圖檔
import { ReactComponent as MinusIcon } from '../icons/minus.svg'
import { ReactComponent as PlusIcon } from '../icons/plus.svg'

const Product = ({ data }) => {
  // 使用 map() 打印出從父層傳來的產品資訊
  const productList = data.map((product) => (
    <div
      className="product-container col col-12"
      data-count={product.quantity}
      data-price={product.price}
    >
      <img className="img-container" src={product.img} alt="" />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <MinusIcon className="product-action minus" />
            <span className="product-count">{product.quantity}</span>
            <PlusIcon className="product-action plus" />
          </div>
        </div>
        <div className="price">${product.price * product.quantity}</div>
      </div>
    </div>
  ))
  return (
    <div>
      {productList}
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
