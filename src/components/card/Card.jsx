import React from "react";
import "../../scss/components/_card.scss";
import Man from "../../assets/images/card-man.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  removeItemFromCart,
} from "../../context/slice/cartSlice";
import YAndex1 from "../../assets/images/yandex-1.svg";
import YAndex2 from "../../assets/images/yandex-2.svg";
import Yandex3 from "../../assets/images/yandex-3-3-removebg-preview.png";
import Yandex4 from "../../assets/images/yandex-4.svg";
import Yandex5 from "../../assets/images/yandex-5.svg";
import Yandex6 from "../../assets/images/yandex-6.svg";

const Card = () => {
  const dispatch = useDispatch();
  let carts = useSelector((s) => s.cart.value);

  let product = carts?.map((el) => (
    <div key={el.id} className="card_product_par">
      <div className="card_product_par_text">
        <img src={el.images[0]} alt={el.title} />
        <div>
          <p className="card_text_first">{el.title} </p>
          <span className="card_text_span_first">
            Размер: XXXL(54) <p>Рост: 170</p>
          </span>
        </div>
      </div>
      <div className="card_text_paragriph">
        <div className="card_text_paragriph_div_first">
          {Math.round(el.price)}$
        </div>
        <div className="card_text_paragriph_div_second">
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decrementCartQuantity(el))}
          >
            -
          </button>
          <p>|</p> <span>{el.quantity}</span> <p>|</p>
          <button onClick={() => dispatch(incrementCartQuantity(el))}>+</button>
        </div>
        <div className="card_text_paragriph_div_three">
          <p>Cумма</p> <p>{Math.round(el.price * el.quantity)}$</p>
        </div>
        <div
          className="card_text_paragriph_div_four"
          onClick={() => dispatch(removeItemFromCart(el))}
        >
          {" "}
          x{" "}
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section className="card">
        <div className="container">
          <div className="card_product_box">
            <h1>Ваша корзина</h1>
            {product}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
