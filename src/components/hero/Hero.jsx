import React from "react";
import bannerImg from "../../assets/images/banner.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__content">
          <img src={bannerImg} alt="Banner image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
