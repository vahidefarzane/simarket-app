import React from "react";
import "../BestSeller/BestSeller.css";
import { makeStyles } from "@mui/styles";
import { Stack, Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  bestSellerProduct: {
    padding: "0",
    backgroundColor: " #fff",
    overflow: "hidden",
    border: "1px solid #212121",
    borderRadius: "1.1rem",
  },
  bestSellerImgwraper: {
    height: "23rem",
    [theme.breakpoints.down("md")]: {
      height: "18rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "16rem",
    },
  },
  bestSellerImg: {
    height: "23rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      height: "18rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "16rem",
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
