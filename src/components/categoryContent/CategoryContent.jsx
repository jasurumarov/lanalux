import React from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import CardImg from '../../assets/images/card-img.png'
import DiscountImg from '../../assets/icons/discount.svg'
import { MdOutlineCurrencyRuble } from 'react-icons/md'
import { IoCartOutline } from 'react-icons/io5'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { BiRuble } from 'react-icons/bi'
import Products from '../products/Products'

const CategoryContent = () => {
    return (
        <>
            <section className='category-section'>
                <div className="container">
                    <div className="category-section__content">
                        <h1>Мужская курта</h1>
                        <img className='category__discount' src={DiscountImg} alt="category icon" />
                        <Swiper
                            className="category__cards"
                            loop={true}
                            slidesPerView={4}
                            spaceBetween={30}
                            breakpoints={{
                                10: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                578: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                870: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1134: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true
                            }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                            <SwiperSlide className="category__card">
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
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <Products />
        </>
    )
}

export default CategoryContent