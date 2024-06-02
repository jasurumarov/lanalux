import React from 'react'

// Images
import SiteLogo from '../../assets/icons/site-logo.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav className="header__content">
              <img src={SiteLogo} alt="site logo" />
            </nav>
        </div>
    </header>
  )
}

export default Header