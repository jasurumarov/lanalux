import React from 'react'
import { HiChevronDown, HiOutlineMenuAlt2, HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';

// Images
import SiteLogo from '../../assets/icons/site-logo.svg'
import UsIcon from '../../assets/icons/us.svg'
import RuIcon from '../../assets/icons/ru.svg'
import { GoSearch } from 'react-icons/go';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header__content">
          <Link className='site-logo' to={'/'}><img src={SiteLogo} alt="site logo" /></Link>
          <div className='header__content-category'>
            <button >
              <HiOutlineMenuAlt2 />
              <p>каталог</p>
            </button>
          </div>
          <h3>Одежда и постель из натуральной шерсти</h3>
          <div className="header__content-contact">
            <p>+7 (495) 508-76-45</p>
            <Link to={'tel: +7 495 508-76-45'}>заказать звонок</Link>
          </div>
          <div className="header__content-btns">
            <button className='header__content-search'>
              <GoSearch />
            </button>
            <button className='header__content-cart'>
              <HiOutlineShoppingBag />
              <sup>10</sup>
            </button>
            <button className='header__content-lang'>
              RU
              <img src={RuIcon} alt="russia flag" />
              <HiChevronDown />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header