import React from "react";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import BestSeller from "../../Components/BestSeller/BestSeller";
import BannerAds from "../../Components/BannerAds/BannerAds";
import Categories from "../../Components/Categories/Categories";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Services />
      <BestSeller />
      <BannerAds />
      <Categories />
    </div>
  );
}
