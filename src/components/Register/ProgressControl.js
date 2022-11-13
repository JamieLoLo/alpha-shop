import React from 'react'
import { ReactComponent as RightArrow } from '../icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../icons/left-arrow.svg'

const ProgressControl = ({ currentStep, handleNextClick, handlePrevClick }) => {
  return (
    <div>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        {currentStep === 1 && (
          <section className="button-group col col-12" data-phase="address">
            <button className="next cursor-point" onClick={handleNextClick}>
              下一步
              <RightArrow className="svg" />
            </button>
          </section>
        )}

        {currentStep === 2 && (
          <section className="button-group col col-12" data-phase="shipping">
            <button className="prev cursor-point" onClick={handlePrevClick}>
              <LeftArrow className="svg" />
              上一步
            </button>
            <button className="next cursor-point" onClick={handleNextClick}>
              下一步
              <RightArrow className="svg" />
            </button>
          </section>
        )}

        {currentStep === 3 && (
          <section className="button-group col col-12" data-phase="credit-card">
            <button className="prev cursor-point" onClick={handlePrevClick}>
              <LeftArrow className="svg" />
              上一步
            </button>
            <button className="next cursor-point ">確認下單</button>
          </section>
        )}
      </section>
    </div>
  )
}

export default ProgressControl
