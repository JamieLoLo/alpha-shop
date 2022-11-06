import React from 'react'
import { ReactComponent as RightArrow } from '../icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../icons/left-arrow.svg'

const ProgressControl = () => {
  return (
    <div>
      {/* progress-control */}
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase="address">
          <button className="next">
            下一步
            <RightArrow className="cursor-point svg" />
          </button>
        </section>
        {/* 為了先使用 display:none完成初步切版 先將優先權較高的 col col-12 className 刪除 */}
        <section className="button-group d-none" data-phase="shipping">
          <button className="prev">
            <LeftArrow className="cursor-point svg" />
            上一步
          </button>
          <button className="next">
            下一步
            <RightArrow className="cursor-point svg" />
          </button>
        </section>
        {/* 為了先使用 display:none完成初步切版 先將優先權較高的 col col-12 className 刪除 */}
        <section className="button-group d-none" data-phase="credit-card">
          <button className="prev">
            <LeftArrow className="cursor-pointer svg" />
            上一步
          </button>
          <button className="next">確認下單</button>
        </section>
      </section>
    </div>
  )
}

export default ProgressControl
