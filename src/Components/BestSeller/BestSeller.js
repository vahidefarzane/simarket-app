import React from "react";
import "./BestSeller.css";
import useFetch from "../../hooks/useFetch";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import HomeProductBox from "../HomeProductBox/HomeProductBox";
import MyButton from "../MyButton/MyButton";
import { Stack } from "@mui/system";
import HomeTitleComponent from "../HomeTitleComponent/HomeTitleComponent";

const useStyles = makeStyles((theme) => ({
  bestSellerWrapper: {
    margin: "2rem 0",
    backgroundColor: "#212121",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
  },
}));

export default function BestSeller() {
  const classes = useStyles();
  const { allProducts, ispending } = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <Stack className={classes.bestSellerWrapper}>
      <HomeTitleComponent title="پرفروش ترین محصولات" />
      <Swiper
        spaceBetween={10}
        Navigation={true}
        breakpoints={{
          300:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400:{
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {ispending &&
          allProducts.slice(11, 15).map((product) => (
            <SwiperSlide>
              <HomeProductBox
                productId={product.id}
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Stack>
  );
}
