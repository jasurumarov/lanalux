import React, { useState } from 'react'
import { HiChevronDown, HiOutlineMenuAlt2, HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';

// Images
import SiteLogo from '../../assets/icons/site-logo.svg'
import UsIcon from '../../assets/icons/us.svg'
import RuIcon from '../../assets/icons/ru.svg'
import { GoSearch } from 'react-icons/go';
import { HiArrowSmallDown } from 'react-icons/hi2';

const Header = () => {
  const [catalog, setCatalog] = useState(false)
  const navigate = useNavigate()

  return (
    <header>
      <div className="container">
        <nav className="header__content">
          <Link className='site-logo' to={'/'}><img src={SiteLogo} alt="site logo" /></Link>
          <div className='header__content-category'>
            <button onClick={() => setCatalog(p => !p)} >
              <HiOutlineMenuAlt2 />
              <p>каталог</p>
            </button>
            {
              catalog ?
                <div className="header__catalog-list">
                  <ul className='header__catalog-list__content'>
                    <li className='header__catalog-list__content-item'>
                      Постельное бельё
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      Домашняя одежда
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link onClick={() => setCatalog(p => !p)} to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      одежда
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      Для детей
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      Подушки для сна
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      Декоративные подушки
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      Головные уборы
                      и шарфы
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                    <li className='header__catalog-list__content-item'>
                      Аксессуары и прочее
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          <Link to={'/category'}>Наматрасники </Link>
                          <Link to={'/category'}>Одеяла</Link>
                          <Link to={'/category'}>Одеяла зимние</Link>
                          <Link to={'/category'}>Подушки</Link>
                          <Link to={'/category'}>Спальный комплект</Link>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                : <></>

            }
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
            <button onClick={() => navigate('/cart')} className='header__content-cart'>
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