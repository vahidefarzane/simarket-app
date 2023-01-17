import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BannerAds.css";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    margin:'0.5rem',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  imageBanner: {
    width: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "46%",
      margin:'0'
    },
  },
}));
export default function BannerAds() {
  const classes = useStyles();
  const [images, setImages] = useState([
    { id: 1, src: "./images/banner_ads1.jpg" },
    { id: 2, src: "./images/banner_ads2.jpg" },
    { id: 3, src: "./images/banner_ads3.jpg" },
    { id: 4, src: "./images/banner_ads4.jpg" },
  ]);
  return (
    <Box className={classes.imageContainer}>
      {images.map((img) => (
        <Box
          className={classes.imageBanner}
          component={"img"}
          key={img.id}
          src={img.src}
        />
      ))}
    </Box>
  );
}
