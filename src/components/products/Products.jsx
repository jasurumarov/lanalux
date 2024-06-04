import React, { useState } from "react";
import { useGetProductsQuery } from "../../context/api/productsApi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../context/slice/cartSlice'

// Images
import { MdOutlineCurrencyRuble } from "react-icons/md";
import { BiRuble } from "react-icons/bi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
    LiaSortAmountDownAltSolid,
    LiaSortAmountDownSolid,
} from "react-icons/lia";

const Products = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(1);
    const [sortAsc, setSortAsc] = useState(true);
    let { data, isLoading } = useGetProductsQuery(`limit=${8 * seeMore}`);
    const dispatch = useDispatch()

    let numOfLoadingItem = Array(8).fill("");
    let loadingItem = numOfLoadingItem.map((_, inx) => (
        <div key={inx} className="products__card-loading">
            <div className="products__card-img"></div>
            <p className="products__img-title"></p>
            <div className="products__card-oldPrice"></div>
            <h3></h3>
            <div className="products__card-cart">
                <div className="products__card-cart__qty"></div>
                <button className="products__card-cart__content"></button>
            </div>
        </div>
    ));

    const sortedProducts = data?.products
        ? [...data.products].sort((a, b) =>
            sortAsc ? a.price - b.price : b.price - a.price
        )
        : [];

    let product = sortedProducts?.map((el) => (
        <div key={el.id} className="products__card">
            <div className="products__card-img">
                <img
                    onClick={() => navigate(`/product/${el.id}`)}
                    src={el.images[0]}
                    alt={el.title}
                />
            </div>
            <p className="products__img-title" title={el.title}>
                {el.title}
            </p>
            <div className="products__card-oldPrice">
                <p>
                    <del>{Math.round(el.price * 10)}</del> <MdOutlineCurrencyRuble />
                </p>
                <h4>-10%</h4>
            </div>
            <h3>
                {el.price} <BiRuble />
            </h3>
            <div className="products__card-cart">
                <div className="products__card-cart__qty">
                    <button>
                        <FaMinus />
                    </button>
                    <p>|</p>
                    <span>1</span>
                    <p>|</p>
                    <button>
                        <FaPlus />
                    </button>
                </div>
                <button onClick={() => dispatch(addToCart(el))} className="products__card-cart__content">
                    <IoCartOutline />
                </button>
            </div>
        </div>
    ));
    return (
        <section style={{ marginTop: "30px" }} className="products-section">
            <div className="container">
                {pathname.includes("product") ? (
                    <></>
                ) : (
                    <div className="category__filters">
                        <div className="category__filters-top">
                            <h2>фильтр по параметрам</h2>
                            <div className="category__filters-top-filter">
                                <div className="category__filters-top-filter__seemore">
                                    <p>Показать:</p>
                                    <button
                                        onClick={() => setSeeMore(1)}
                                        className={seeMore === 1 ? "active" : ""}
                                    >
                                        8
                                    </button>
                                    <button
                                        onClick={() => setSeeMore(3)}
                                        className={seeMore === 3 ? "active" : ""}
                                    >
                                        / 24
                                    </button>
                                    <button
                                        onClick={() => setSeeMore(5)}
                                        className={seeMore === 5 ? "active" : ""}
                                    >
                                        / 40
                                    </button>
                                </div>
                                <div className="category__filters-top-filter__sena">
                                    <p>По цене:</p>
                                    <button
                                        onClick={() => setSortAsc(true)}
                                        className={sortAsc ? "active" : ""}
                                    >
                                        <LiaSortAmountDownAltSolid />
                                    </button>
                                    <button
                                        onClick={() => setSortAsc(false)}
                                        className={!sortAsc ? "active" : ""}
                                    >
                                        <LiaSortAmountDownSolid />
                                    </button>
                                </div>
                            </div>
                        </div >
                        <div className="category__filters-body">
                            <div className="category__filters-body__filter">
                                <h4>Выберите размер</h4>
                                <article>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>М(46)</p>
                                    </button>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>L(48)</p>
                                    </button>
                                    <button>
                                        <input disabled defaultChecked type="checkbox" />
                                        <p>XL(50)</p>
                                    </button>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>XXL(52)</p>
                                    </button>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>XXXL(54)</p>
                                    </button>
                                </article>
                            </div>
                            <div className="category__filters-body__filter category__filters-body__byRost">
                                <h4>Выберите РОСТ</h4>
                                <article>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>170</p>
                                    </button>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>176</p>
                                    </button>
                                    <button>
                                        <input disabled defaultChecked type="checkbox" />
                                        <p>182</p>
                                    </button>
                                    <button disabled>
                                        <input disabled type="checkbox" />
                                        <p>188</p>
                                    </button>
                                </article>
                            </div>
                            <div className="category__filters-seeMore">
                                <div></div>
                                <p>развернуть все параметры</p>
                                <div></div>
                            </div>
                        </div>
                    </div >
                )}

                <div className="products-section__content">
                    {isLoading ? loadingItem : product}
                </div>
        {/* <div className='products-section__seeMore'>
                    <button onClick={() => setSeeMore(seeMore + 1)}>See more</button>
                </div> */}
        </div>
    </section>
);
};

export default Products;
