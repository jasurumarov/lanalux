import React from "react";

// Components
import Hero from "../../components/hero/Hero";
import Ads from "../../components/ads/Ads";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Ads />
    </main>
  );
};

export default Home;
