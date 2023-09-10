import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import "./BannerAds.css";

export default function BannerAds() {
  const { response: bannerImgs, loading } = useAxios({
    url: "/BannerImages",
    method: "get",
  });
  
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
      {loading ? (
        <Loading />
      ) : (
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
        ))
      )}
    </Box>
  );
}
