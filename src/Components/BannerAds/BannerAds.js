import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./BannerAds.css";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
     flexWrap:'wrap',
     
    },
  },
  imageBanner: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
      margin: "0",
    },
  },
}));
export default function BannerAds() {
  const classes = useStyles();
  const { bannerImgs, bannerImgsIsPending } = useFetch(
    "http://localhost:4000/BannerImages"
  );

  return (
    <Box className={classes.imageContainer}>
      {bannerImgsIsPending &&
        bannerImgs.map((bannerImg) => (
          <Link to={bannerImg.to} key={bannerImg.id}>
            <Box
              className={classes.imageBanner}
              component="img"
              src={bannerImg.src}
            />
          </Link>
        ))}
    </Box>
  );
}
