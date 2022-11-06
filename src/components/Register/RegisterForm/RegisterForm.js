import React from 'react'
import Address from './Address'
import Shipping from './Shipping'
import CreditCard from './CreditCard'

const RegisterForm = () => {
  return (
    <div>
      {/* register-form */}
      <section className="form-container col col-12">
        <Address />
        <Shipping />
        <CreditCard />
      </section>
    </div>
  )
}

export default RegisterForm
