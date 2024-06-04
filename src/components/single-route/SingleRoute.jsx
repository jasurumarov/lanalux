import React from "react";
import img from "../../assets/images/card-img.png";
import color1 from "../../assets/images/color-1.png";
import color2 from "../../assets/images/color-2.png";
import color3 from "../../assets/images/color-3.png";
import color4 from "../../assets/images/color-4.png";
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const SingleRoute = () => {
  return (
    <div className="detail-section">
      <div className="container">
        <div className="detail__content">
          <h3>МУЖСКАЯ КУРТКА (СКАНДИНАВКА БЕЖЕВАЯ) С КАПЮШОНОМ</h3>
          <div className="detail__product">
            <div className="image__wrapper">
              <div className="product__img">
                <img src={img} alt="" />
              </div>
              <div className="pro__images">
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
              </div>
            </div>
            <div className="product__about">
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
                <h3>8000 $</h3>
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
