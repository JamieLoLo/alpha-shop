import React, { useContext } from 'react'
import { FormContext } from '../../../contexts/FormContext'

const CreditCard = () => {
  const { handleFormChange } = useContext(FormContext)
  return (
    <div>
      {/* credit-card phase */}
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input
                type="text"
                placeholder="John Doe"
                onChange={handleFormChange}
                id="creditName"
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                onChange={handleFormChange}
                id="creditNumber"
              />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input
                type="text"
                placeholder="MM/YY"
                onChange={handleFormChange}
                id="creditExp"
              />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input
                type="text"
                placeholder="123"
                onChange={handleFormChange}
                id="creditCCV"
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default CreditCard
