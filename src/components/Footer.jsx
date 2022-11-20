import React from 'react'
import { ReactComponent as LogoIcon } from './icons/logo.svg'
import { ReactComponent as FacebookIcon } from './icons/facebook.svg'
import { ReactComponent as InstagramIcon } from './icons/instagram.svg'
import { ReactComponent as WhatsappIcon } from './icons/whatsapp.svg'

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo-container">
            <LogoIcon className="icon-logo" />
          </div>
          <section className="footer-section">
            <h2 className="section-title">客戶服務</h2>
            <div className="section-content">
              <a className="page-link" href="localhost:3000">
                運送說明
              </a>
              <a className="page-link" href="localhost:3000">
                退換貨相關
              </a>
              <a className="page-link" href="localhost:3000">
                付款資訊
              </a>
              <a className="page-link" href="localhost:3000">
                FAQ
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">關於我們</h2>
            <div className="section-content">
              <a className="page-link" href="localhost:3000">
                品牌故事
              </a>
              <a className="page-link" href="#localhost:3000">
                媒體聯繫
              </a>
              <a className="page-link" href="localhost:3000">
                Press kit
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">資訊</h2>
            <div className="section-content">
              <a className="page-link" href="localhost:3000">
                隱私權政策
              </a>
              <a className="page-link" href="localhost:3000">
                Cookie
              </a>
              <a className="page-link" href="localhost:3000">
                GDPR
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">追蹤 ALPHA Shop</h2>
            <div className="section-content">
              <div className="tel-info">+886 02123-45678</div>
              <div className="social-icon-group">
                <FacebookIcon className="social-icon cursor-point" />
                <InstagramIcon className="social-icon cursor-point" />
                <WhatsappIcon className="social-icon cursor-point" />
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Footer
