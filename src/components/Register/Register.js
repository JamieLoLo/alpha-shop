import React from 'react'
import RegisterProgress from './RegisterProgress'
import RegisterForm from './RegisterForm/RegisterForm'
import ProgressControl from './ProgressControl'

const Register = () => {
  return (
    <div>
      <RegisterProgress />
      <RegisterForm />
      <ProgressControl />
    </div>
  )
}

export default Register
