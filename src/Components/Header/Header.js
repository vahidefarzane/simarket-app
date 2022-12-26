import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-slider">
        <img src="./images/slider1_orginal.jpg" alt="" />
      </div>
      <div className="header-btn-wrapper">
        <Link className="header-btn-banner">
          <img src="./images/banner-btn2.jpg" alt="" />
        </Link>
        <Link className="header-btn-banner">
          <img src="./images/banner-top.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}
