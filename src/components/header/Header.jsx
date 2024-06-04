import React, { useState } from 'react'
import { HiChevronDown, HiOutlineMenuAlt2, HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { useGetCategoryProductsQuery } from "../../context/api/productsApi";
import { useGetSearchProductsQuery } from '../../context/api/productsApi'

// Images
import SiteLogo from '../../assets/icons/site-logo.svg'
import UsIcon from '../../assets/icons/us.svg'
import RuIcon from '../../assets/icons/ru.svg'
import { GoSearch } from 'react-icons/go';
import { HiArrowSmallDown } from 'react-icons/hi2';
import cartSlice from '../../context/slice/cartSlice';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';

const categories = [
  "Постельное бельё",
  "Домашняя одежда",
  "Одежда",
  "Для детей",
  "Подушки для сна",
  "Декоративные подушки",
  "Головные уборы и шарфы",
  "Аксессуары и прочее"
];

const Header = () => {
  const [value, setValue] = useState("")
  const [catalog, setCatalog] = useState(false)
  const [search, setSearch] = useState(false)
  const { data } = useGetCategoryProductsQuery();
  const navigate = useNavigate()
  let cart = useSelector(s => s.cart.value)

  let { data: searchedData } = useGetSearchProductsQuery({ q: value })
  let searchItems = searchedData?.products?.map(el => (
    <li onClick={() => {
      navigate(`/product/${el.id}`)
      setValue("")
    }} key={el.id}><img src={el.images[0]} alt="" /> <p>{el.title}</p></li>
  ))

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
            {catalog && (
              <div className="header__catalog-list">
                <ul className='header__catalog-list__content'>
                  {categories.map((category, index) => (
                    <li key={index} className='header__catalog-list__content-item'>
                      {category}
                      <HiArrowSmallDown />
                      <div>
                        <ul>
                          {data?.slice(0, 5)?.map(el => (
                            <Link key={el} to={`/category/${el}`} onClick={() => setCatalog(p => !p)}> {el}</Link>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <h3>Одежда и постель из натуральной шерсти</h3>
          <div className="header__content-contact">
            <p>+7 (495) 508-76-45</p>
            <Link to={'tel: +7 495 508-76-45'}>заказать звонок</Link>
          </div>
          <div className="header__content-btns">
            <div className={`header__search ${search ? 'active' : ''}`}>
              {search ?
                <button onClick={() => {
                  setSearch(p => !p)
                  setValue("")
                  }} className={`header__content-search ${search ? 'active' : ''} ${value ? 'value' : ''}`}>
                  <IoMdClose />
                </button>
                :
                <button onClick={() => setSearch(p => !p)} className={`header__content-search ${search ? 'active' : ''} ${value ? 'value' : ''}`}>
                  <GoSearch />
                </button>
              }
              <input value={value} onChange={e => setValue(e.target.value)} className={`${search ? 'active' : ''} ${value ? 'value' : ''}`} type="text" placeholder='Поиск...' />
              {value
                ? <ul className={`search__value`}>
                  {searchItems}
                </ul>
                : <></>}
            </div>
            <button onClick={() => navigate('/cart')} className='header__content-cart'>
              <HiOutlineShoppingBag />
              <sup>{cart.length}</sup>
            </button>
            <button className='header__content-lang'>
              RU
              <img src={RuIcon} alt="russia flag" />
              <HiChevronDown />
            </button>
          </div>
        </nav>
      </div >
    </header >
  )
}

export default Header