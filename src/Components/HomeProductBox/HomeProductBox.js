import React from "react";
import "../BestSeller/BestSeller.css";
import { makeStyles } from "@mui/styles";
import { Stack, Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  bestSellerProduct: {
    padding: "0",
    backgroundColor: " #fff",
    overflow: "hidden",
    borderRadius: "1.1rem",
    width:'100%'
  },
  bestSellerImgwraper: {
    // height: "19rem",
    // [theme.breakpoints.down("md")]: {
    //   height: "18rem",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: "16rem",
    // },
  },
  bestSellerImg: {
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      height: "17rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "14rem",

    },
  },
  bestSellerName: {
    display: "block",
    height: "4.5rem",
    padding: "0.5rem 0",
    fontWeight: "600",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "5.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
    },
  },
  bestSellerPrice: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bestSellerPriceLast: {
    fontSize: "1rem",
    color: "#a8a8a8",
    paddingRight: "3rem",
    textDecoration: "line-through",
    [theme.breakpoints.down("md")]: {
      padding: "0.5rem",
      fontSize: "0.7rem",
    },
  },
  bestSellerPricenew: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },
  },
  bestSellerPriceOff: {
    backgroundColor: " #fb4208",
    padding: "1.5rem",
    color: "white",
    fontWeight: "600",
    [theme.breakpoints.down("lg")]: {
      padding: "1.3rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
      fontSize: "0.7rem",
    },
  },
}));

export default function HomeProductBox(props) {
  const classes = useStyles();
  const { productId, productImage, productTitle, productPrice } = props;

  return (
    <Stack key={productId} className={classes.bestSellerProduct}>
      <Box className={classes.bestSellerImgwraper}>
        <Box
          className={classes.bestSellerImg}
          component="img"
          src={productImage}
          alt={productTitle}
          sx={{ width: {
            lg:`${props.isSlider && "14rem"}`,
            md:`${props.isSlider && "12rem"}`,
            sm:`${props.isSlider && "10rem"}`,
            xs:`${props.isSlider && "7rem"}`,
          } ,padding:{
            md:'0.7rem',
            sm:'0.7rem',
          },height:{
            lg:'17rem',
            md:'15rem',
            sm:'12rem',
            xs:'10rem',
          }}}
        />
      </Box>
      <Typography
        component={"span"}
        className={classes.bestSellerName}
        sx={{
          fontSize: {
            md: "0.9rem",
            sm: "0.8rem",
          },
        }}
      >
        {productTitle}
      </Typography>
      <Box className={classes.bestSellerPrice}>
        <Box component={"span"} className={classes.bestSellerPriceLast}>
          {productPrice}
        </Box>
        <Box component={"span"} className={classes.bestSellerPricenew}>
          {productPrice}
        </Box>
        <Box component={"span"} className={classes.bestSellerPriceOff}>
          12%
        </Box>
      </Box>
    </Stack>
  );
}
