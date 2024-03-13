import React from "react";
import Header from "../Components/Header/Header";
import Services from "../Components/Services";
import BestSeller from "../Components/BestSeller/BestSeller";
import BannerAds from "../Components/BannerAds";
import Categories from "../Components/Categories";
import NewsLetter from "../Components/NewsLetter";

export default function Home({ searchParams }) {
  return (
    <div className="home-container">
      <Header />
      <Services />
      <BestSeller />
      <BannerAds />
      <Categories />
      <NewsLetter />
    </div>
  );
}
