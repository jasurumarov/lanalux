import React from 'react'

// Images
import CardImg from '../../assets/images/card-img.png'
import DiscountImg from '../../assets/icons/discount.svg'
import { MdOutlineCurrencyRuble } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'
import { FaMinus, FaPlus, FaRubleSign } from 'react-icons/fa'
import { BiRuble } from 'react-icons/bi'

const CategoryContent = () => {
    return (
        <section className='category-section'>
            <div className="container">
                <div className="category-section__content">
                    <h1>Мужская курта</h1>
                    <img className='category__discount' src={DiscountImg} alt="category icon" />
                    <div className="category__cards">
                        <div className="category__card">
                            <div className='category__card-img'>
                                <img src={CardImg} alt="card image" />
                            </div>
                            <p className='category__img-title'>Мужская курта (скандинавка бежовая) с капюшоном</p>
                            <div className="category__card-oldPrice">
                                <p>10 119 <MdOutlineCurrencyRuble /></p>
                                <h4>-10%</h4>
                            </div>
                            <h3>8 000 <BiRuble /></h3>
                            <div className="category__card-cart">
                                <div className="category__card-cart__qty">
                                    <button><FaMinus /></button>
                                    <p>|</p>
                                    <span>1</span>
                                    <p>|</p>
                                    <button><FaPlus /></button>
                                </div>
                                <button className='category__card-cart__content'><IoCartOutline /></button>
                            </div>
                        </div>
                        <div className="category__card">
                            <div className='category__card-img'>
                                <img src={CardImg} alt="card image" />
                            </div>
                            <p className='category__img-title'>Мужская курта (скандинавка бежовая) с капюшоном</p>
                            <div className="category__card-oldPrice">
                                <p>10 119 <MdOutlineCurrencyRuble /></p>
                                <h4>-10%</h4>
                            </div>
                            <h3>8 000 <BiRuble /></h3>
                            <div className="category__card-cart">
                                <div className="category__card-cart__qty">
                                    <button><FaMinus /></button>
                                    <p>|</p>
                                    <span>1</span>
                                    <p>|</p>
                                    <button><FaPlus /></button>
                                </div>
                                <button className='category__card-cart__content'><IoCartOutline /></button>
                            </div>
                        </div>
                        <div className="category__card">
                            <div className='category__card-img'>
                                <img src={CardImg} alt="card image" />
                            </div>
                            <p className='category__img-title'>Мужская курта (скандинавка бежовая) с капюшоном</p>
                            <div className="category__card-oldPrice">
                                <p>10 119 <MdOutlineCurrencyRuble /></p>
                                <h4>-10%</h4>
                            </div>
                            <h3>8 000 <BiRuble /></h3>
                            <div className="category__card-cart">
                                <div className="category__card-cart__qty">
                                    <button><FaMinus /></button>
                                    <p>|</p>
                                    <span>1</span>
                                    <p>|</p>
                                    <button><FaPlus /></button>
                                </div>
                                <button className='category__card-cart__content'><IoCartOutline /></button>
                            </div>
                        </div>
                        <div className="category__card">
                            <div className='category__card-img'>
                                <img src={CardImg} alt="card image" />
                            </div>
                            <p className='category__img-title'>Мужская курта (скандинавка бежовая) с капюшоном</p>
                            <div className="category__card-oldPrice">
                                <p>10 119 <MdOutlineCurrencyRuble /></p>
                                <h4>-10%</h4>
                            </div>
                            <h3>8 000 <BiRuble /></h3>
                            <div className="category__card-cart">
                                <div className="category__card-cart__qty">
                                    <button><FaMinus /></button>
                                    <p>|</p>
                                    <span>1</span>
                                    <p>|</p>
                                    <button><FaPlus /></button>
                                </div>
                                <button className='category__card-cart__content'><IoCartOutline /></button>
                            </div>
                        </div>
                    </div>
                    <div className="category__filters">
                        <div className="category__filters-top">
                            <h2>фильтр по параметрам</h2>
                            div
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryContent