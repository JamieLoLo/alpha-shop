import React from 'react'
import Address from './Address'
import Shipping from './Shipping'
import CreditCard from './CreditCard'

const RegisterForm = ({ currentStep }) => {
  return (
    <div>
      {/* register-form */}
      <section className="form-container col col-12">
        {currentStep === 1 && <Address />}
        {currentStep === 2 && <Shipping />}
        {currentStep === 3 && <CreditCard />}
      </section>
    </div>
  )
}

export default RegisterForm
