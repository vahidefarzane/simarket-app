import React from "react";
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
import "./BestSeller.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const useStyles = makeStyles((theme) => ({
  bestSellerWrapper: {
    margin: "2rem 0",
    backgroundColor: "#212121",
    padding: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0.6rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.7rem 3rem",
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
      <HomeTitleComponent
        title="پرفروش ترین محصولات"
        color="#fff"
        margin="1rem 1rem 2rem"
      />
      <Box className="swiper-best-seller-product-wraper">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fb4707",
            "--swiper-pagination-color": "#fb4707",
            padding: "0 0 3rem 0",
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
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
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {ispending &&
            allProducts.slice(1, 9).map((product) => (
              <SwiperSlide>
                <HomeProductBox
                  productId={product.id}
                  productImage={product.image}
                  productTitle={product.title}
                  productPrice={product.price}
                  isSlider={true}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Stack>
  );
}
