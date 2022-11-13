import React from 'react'
import RegisterProgress from './RegisterProgress'
import RegisterForm from './RegisterForm/RegisterForm'
import ProgressControl from './ProgressControl'

const Register = ({ currentStep, handleNextClick, handlePrevClick }) => {
  return (
    <div>
      <RegisterProgress />
      <RegisterForm currentStep={currentStep} />
      <ProgressControl
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        currentStep={currentStep}
      />
    </div>
  )
}

export default Register
