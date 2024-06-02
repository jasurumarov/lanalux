import React from "react";

// Components
import Hero from "../../components/hero/Hero";
import WoolType from "../../components/wool-type";
import Video from "../../components/video";
import Category from "../../components/catalog";

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <WoolType />
      <Video embedId={"watch?v=p6CFBpe8zws&t=13s"} />
      <Category />
    </main>
  );
};

export default Home;
