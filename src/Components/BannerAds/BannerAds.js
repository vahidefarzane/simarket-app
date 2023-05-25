import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./BannerAds.css";

export default function BannerAds() {
  const { bannerImgs, bannerImgsIsPending } = useFetch(
    "http://localhost:4000/BannerImages"
  );

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          flexWrap: "wrap",
        },
      })}
    >
      {bannerImgsIsPending &&
        bannerImgs.map((bannerImg) => (
          <Link to={bannerImg.to} key={bannerImg.id}>
            <Box
              sx={(theme) => ({
                width: "100%",
                [theme.breakpoints.down("sm")]: {
                  width: "8rem",
                  margin: "0",
                },
              })}
              component="img"
              src={bannerImg.src}
            />
          </Link>
        ))}
    </Box>
  );
}
