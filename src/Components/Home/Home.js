import React from "react";
import Header from '../Header/Header'
import Services from '../Services/Services'
import BestSeller from '../BestSeller/BestSeller'
import BannerAds from '../BannerAds/BannerAds'
import Categories from '../Categories/Categories'
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
