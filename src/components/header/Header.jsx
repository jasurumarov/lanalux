import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";

// Images
import SiteLogo from '../../assets/icons/site-logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header__content">
          <img src={SiteLogo} alt="site logo" />
          <button>
            <HiOutlineMenuAlt2   />
            каталог
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header