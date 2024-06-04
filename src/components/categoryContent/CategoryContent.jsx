import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images
import CardImg from "../../assets/images/card-img.png";
import DiscountImg from "../../assets/icons/discount.svg";
import { MdOutlineCurrencyRuble } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BiRuble } from "react-icons/bi";
import Products from "../products/Products";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../context/slice/cartSlice";
import { useDispatch } from "react-redux";

const CategoryContent = ({ data }) => {
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const swiperItem = data?.map((el) => (
    <SwiperSlide key={el.id} className="category__card">
      <div
        onClick={() => navigate(`/product/${el.id}`)}
        className="category__card-img"
      >
        <img src={el.images[0]} alt="card image" />
      </div>
      <p className="category__img-title">{el.title}</p>
      <div className="category__card-oldPrice">
        <p>
          {Math.round(el.price * 1.1)} <MdOutlineCurrencyRuble />
        </p>
        <h4>-10%</h4>
      </div>
      <h3>
        {Math.round(el.price)} <BiRuble />
      </h3>
      <div className="category__card-cart">
        <div className="category__card-cart__qty">
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
        <button onClick={() => dispatch(addToCart(el))} className="category__card-cart__content">
          <IoCartOutline />
        </button>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <section className="category-section">
        <div className="container">
          <div className="category-section__content">
            <h1>Мужская курта</h1>
            <img
              className="category__discount"
              src={DiscountImg}
              alt="category icon"
            />
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
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              {swiperItem}
            </Swiper>
          </div>
        </div>
      </section>
      <Products />
    </>
  );
};

export default CategoryContent;
