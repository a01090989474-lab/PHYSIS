import { NavLink } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__info">
            <p className="footer__brand">PHYSIS</p>
            <div className="footer__desc">
              <span>경기도 시흥시 매화산단3길 1 (매화동, 리드스마트스퀘어)</span>
              <span>사업자등록번호 641-25-01953</span>
              <span>socool9999@naver.com</span>
              <span>010-3907-6508</span>
            </div>
          </div>
          <div className="footer__nav-group">
            <div>
              <p className="footer__nav-title">제품소개</p>
              <ul className="footer__nav-list">
                <li><NavLink to="/hybridice">HYBRIDICE</NavLink></li>
                <li><NavLink to="/kuraban">KURABAN</NavLink></li>
                <li><NavLink to="/seasnow">SEASNOW</NavLink></li>
              </ul>
            </div>
            <div>
              <p className="footer__nav-title">회사소개</p>
              <ul className="footer__nav-list">
                <li><NavLink to="/about">PHYSIS</NavLink></li>
                <li><NavLink to="/about">파트너십</NavLink></li>
                <li><NavLink to="/about">도입 사례</NavLink></li>
              </ul>
            </div>
            <div>
              <p className="footer__nav-title">고객지원</p>
              <ul className="footer__nav-list">
                <li><NavLink to="/contact">상담문의</NavLink></li>
                <li><NavLink to="/contact">A/S 신청</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <span>&copy; {new Date().getFullYear()} Physis Co. Ltd. All rights reserved.</span>
          <div className="footer__copy-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
