import React from "react";
import img1 from "../../assets/icons/advantages-1.svg";
import img3 from "../../assets/icons/advantages-3.svg";
import img2 from "../../assets/icons/advantages-2.svg";
import reklama from "../../assets/images/ads.png";

const Advantages = () => {
  let str = "преимущества";
  return (
    <div className="advantages-section">
      <div className="container">
        <div className="advantages__content">
          <div className="advantages__line">
            <h3>{str.toUpperCase()}</h3>
            <div className="advantages__wrapper">
              <div className="advantages__card">
                <img src={img1} alt="" />
                <div className="advantages__text">
                  <h4>ДОСТАВКА ПО росии</h4>
                  <p>Почтой России или транспортной компанией СДЭК.</p>
                </div>
              </div>
              <div className="advantages__card">
                <img src={img2} alt="" />
                <div className="advantages__text">
                  <h4>ДЕКЛАРАЦИИ EAC</h4>
                  <p>В наличии на всю продукцию.</p>
                </div>
              </div>
              <div className="advantages__card">
                <img src={img3} alt="" />
                <div className="advantages__text">
                  <h4>Бонусы и подарки</h4>
                  <p>При заказе.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
