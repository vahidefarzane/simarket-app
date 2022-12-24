import React from "react";
import { Link } from "react-router-dom";
import "./BannerAds.css";

export default function BannerAds() {
  const imgs = [
    { id: 1, src: "./images/banner_ads1.jpg" },
    { id: 2, src: "./images/banner_ads2.jpg" },
    { id: 3, src: "./images/banner_ads3.jpg" },
    { id: 4, src: "./images/banner_ads4.jpg" },
  ];
  return (
    <div className="banner-container">
      {imgs.map((img) => (
        <Link className="banner">
          <img key={img.id} src={img.src} />
        </Link>
      ))}
    </div>
  );
}
