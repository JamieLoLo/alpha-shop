import React from 'react'
import Register from './Register/Register'
import Cart from './Cart/Cart'

const Main = () => {
  return (
    <div>
      <main className="site-main">
        <div className="main-container">
          {/* register */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0"
          >
            {/* register-title */}
            <h2 className="register-title col col-12">結帳</h2>
            <Register />
          </section>
          <Cart />
        </div>
      </main>
    </div>
  )
}

export default Main
