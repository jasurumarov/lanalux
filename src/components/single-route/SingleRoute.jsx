import React from "react";
import img from "../../assets/images/card-img.png";
import color1 from "../../assets/images/color-1.png";
import color2 from "../../assets/images/color-2.png";
import color3 from "../../assets/images/color-3.png";
import color4 from "../../assets/images/color-4.png";
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const SingleRoute = ({ data }) => {
  return (
    <div className="detail-section">
      <div className="container">
        <div className="detail__content">
          <h3>МУЖСКАЯ КУРТКА (СКАНДИНАВКА БЕЖЕВАЯ) С КАПЮШОНОМ</h3>
          <div className="detail__product">
            <div className="image__wrapper">
              <div className="product__img">
                <img src={data?.images[0]} alt={data?.title} />
              </div>
              <div className="pro__images">
                <img src={data?.images[0]} alt={data?.title} />
                <img src={data?.images[0]} alt={data?.title} />
                <img src={data?.images[0]} alt={data?.title} />
              </div>
            </div>
            <div className="product__about">
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
              </div>
              <div className="rows">
                <h4>Материал:</h4>
                <p>
                  Снаружи ворсовая ткань «Скандинавка бежевая», внутри
                  натуральная шерсть мериноса
                </p>
              </div>
              <div className="rows">
                <h4>Расцветки:</h4>
                <div className="color__wrapper">
                  <img src={color1} alt="" />
                  <img src={color2} alt="" />
                  <img src={color3} alt="" />
                  <img src={color4} alt="" />
                </div>
              </div>
              <div className="pro__price">
                <h3>{data?.price} $</h3>
                <div className="cart__count">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
                <button className="cart__btn">
                  <IoCartOutline />
                  {/* Logika yozish kerak */}
                  {/* <MdDeleteOutline /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
