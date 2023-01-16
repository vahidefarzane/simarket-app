import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box component="img" src="./images/slider1_orginal.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="./images/slider2_orginal.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <Box sx={{ display: "flex", flexDirection: "column", width: "33%" }}>
        <Box
          component="img"
          src="./images/banner-btn2.jpg"
          alt=""
          sx={{ margin: "0.5rem" }}
        />
        <Box
          component="img"
          src="./images/banner-top.jpg"
          alt=""
          sx={{ margin: "0.5rem" }}
        />
      </Box>
    </Box>
  );
}
