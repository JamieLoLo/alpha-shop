import { createContext } from 'react'

const FormContext = createContext({
  totalPrice: 300,
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCCV: '',
})

export { FormContext }
