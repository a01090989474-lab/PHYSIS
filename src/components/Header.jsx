import { NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          <img src="/images/logo.png" alt="PHYSIS" />
        </NavLink>
        <nav className="header__nav">
          <div className="header__nav-item">
            <NavLink to="/hybridice">Technology</NavLink>
            <div className="header__dropdown">
              <NavLink to="/hybridice">HYBRIDICE</NavLink>
              <NavLink to="/kuraban">KURABAN</NavLink>
              <NavLink to="/seasnow">SEASNOW</NavLink>
            </div>
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
