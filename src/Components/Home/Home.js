import React from "react";
import Services from "./Services/Services";
import BannerAds from "./BannerAds/BannerAds";
import Header from "../Header/Header";
import NewestProducts from "../NewestProducts/NewestProducts";
import BestSeller from "../BestSeller/BestSeller";
import Categories from "../Categories/Categories";
import "./Home.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    // <Swiper
    //   // install Swiper modules
    //   modules={[Navigation, Pagination, A11y]}
    //   spaceBetween={70}
    //   slidesPerView={1}
    //   navigation
    //   pagination={{ clickable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    // >
    //   <SwiperSlide><img src="./logo.png" alt="" /></SwiperSlide>
    //   <SwiperSlide><img src="./images/enamad.png" alt="" /></SwiperSlide>
    //   <SwiperSlide><img src="./images/kasbokar.png" alt="" /></SwiperSlide>
    //   <SwiperSlide><img src="./images/samandehi.png" alt="" /></SwiperSlide>

    // </Swiper>
    <div className="home-container">
      <Header />
      <Services />
      <BestSeller />
      <BannerAds />
      <NewestProducts />
      <Categories />
    </div>
  );
}
