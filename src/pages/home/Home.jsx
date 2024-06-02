import React from "react";

// Components
import Hero from "../../components/hero/Hero";
import Ads from "../../components/ads/Ads";
import WoolType from "../../components/wool-type";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Ads />

      <WoolType />
    </main>
  );
};

export default Home;
