import React, { useState } from 'react'
import Register from './Register/Register'
import Cart from './Cart/Cart'

const Main = () => {
  // 將目前到哪個步驟存進 state
  const [currentStep, setCurrentStep] = useState(1)
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
  return (
    <div>
      <main className="site-main">
        <div className="main-container">
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
          <Cart />
        </div>
      </main>
    </div>
  )
}

export default Main
