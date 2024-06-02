import React from "react";
import bannerImg from "../../assets/images/banner.png";
import ads from "../../assets/images/ads.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          <div className="hero__text">
            <h4>
              Кардиганы: <br />
              80% шерсти мериноса <br />и 20% шерсти ангоры
            </h4>
            <button>Перейти</button>
          </div>
          <div className="hero__img">
            <img src={bannerImg} alt="Banner image" />
          </div>
        </div>
      </div>
      <div className="ads">
        <img src={ads} alt="Advertising" />
      </div>
    </section>
  );
};

export default Hero;
