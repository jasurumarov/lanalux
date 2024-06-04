import React from "react";
import img from "../../assets/images/card-img.png";
import color1 from "../../assets/images/color-1.png";
import color2 from "../../assets/images/color-2.png";
import color3 from "../../assets/images/color-3.png";
import color4 from "../../assets/images/color-4.png";
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementCartQuantity,
  incrementCartQuantity,
  removeItemFromCart,
} from "../../context/slice/cartSlice";

const SingleRoute = ({ data }) => {
  const cart = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();
  const [product] = cart?.filter((el) => el.id === data?.id);
  console.log(product);
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
                {cart?.some((el) => el.id == data?.id) ? (
                  <div className="cart__count">
                    <button
                      disabled={product?.quantity <= 1}
                      onClick={() => dispatch(decrementCartQuantity(data))}
                    >
                      -
                    </button>
                    <span>{product?.quantity || 0}</span>
                    <button
                      disabled={product?.quantity >= 10}
                      onClick={() => dispatch(incrementCartQuantity(data))}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <></>
                )}

                {cart?.some((el) => el.id === data?.id) ? (
                  <button
                    onClick={() => dispatch(removeItemFromCart(data))}
                    className="cart__btn"
                  >
                    <MdDeleteOutline />
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(data))}
                    className="cart__btn"
                  >
                    <IoCartOutline />

                    {/* <MdDeleteOutline /> */}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
