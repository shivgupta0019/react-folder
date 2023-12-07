import React from "react";
import "./Home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Populer from "./popular/Populer";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Populer />
      <TopRated />
    </div>
  );
};

export default Home;
