import React, { useState, useContext } from 'react'
import Register from './Register/Register'
import Cart from './Cart/Cart'
import { FormContext } from '../contexts/FormContext'
import { CartContext } from '../contexts/CartContext'

const Main = () => {
  // 將目前到哪個步驟存進 state
  const [currentStep, setCurrentStep] = useState(1)
  const formContext = useContext(FormContext)
  const [formData, setFormData] = useState(formContext)
  const initialProducts = useContext(CartContext)
  const [products, setProducts] = useState(initialProducts)

  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }
  const handlePrevClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  const handleFormChange = (e) => {
    const value = e.target.value
    const key = e.target.id
    setFormData({ ...formData, [key]: value })
  }

  return (
    <div>
      <main className="site-main">
        <div className="main-container">
          <FormContext.Provider
            value={{
              formData,
              setFormData,
              handleFormChange,
            }}
          >
            {/* register */}
            <section
              className="register-container col col-lg-6 col-sm-12"
              data-phase={currentStep}
              data-total-price="0"
            >
              {/* register-title */}
              <h2 className="register-title col col-12">結帳</h2>
              <Register
                currentStep={currentStep}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
              />
            </section>
            <CartContext.Provider value={{ products, setProducts }}>
              <Cart />
            </CartContext.Provider>
          </FormContext.Provider>
        </div>
      </main>
    </div>
  )
}

export default Main
