import { React } from "react";
import "../BestSeller/BestSeller.css";
import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomeProductBox(props) {
  const { productId, productImage, productTitle, productPrice, offer } = props;

  return (
    <Stack
      key={productId}
      sx={{
        padding: "0",
        backgroundColor: " #fff",
        overflow: "hidden",
        borderRadius: "1.1rem",
        width: "100%",
      }}
    >
      <Link to={`/products/${productId}`}>
        <Box>
          <Box
            sx={(theme) => ({
              padding: "1rem",
              width: {
                lg: `${props.isSlider && "14rem"}`,
                md: `${props.isSlider && "12rem"}`,
                sm: `${props.isSlider && "10rem"}`,
                xs: `${props.isSlider && "10rem"}`,
              },
              padding: {
                md: "0.7rem",
                sm: "0.7rem",
              },
              height: {
                lg: "16rem",
                md: "15rem",
                sm: "12rem",
                xs: "11rem",
              },
              [theme.breakpoints.down("md")]: {
                height: "17rem",
              },
              [theme.breakpoints.down("sm")]: {
                height: "14rem",
              },
            })}
            component="img"
            src={productImage}
            alt={productTitle}
          />
        </Box>
        <Typography
          component={"span"}
          sx={(theme) => ({
            display: "block",
            height: "4rem",
            padding: "0.5rem 0",
            fontWeight: "600",
            textAlign: "center",
            fontSize: {
              md: "0.9rem",
              sm: "0.8rem",
            },
            color: "#000",
            [theme.breakpoints.down("md")]: {
              height: "3.5rem",
            },
            [theme.breakpoints.down("sm")]: {
              height: "3.2rem",
            },
          })}
        >
          {productTitle}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#000",
          }}
        >
          <Box
            component={"span"}
            sx={(theme) => ({
              fontSize: "1rem",
              color: "#a8a8a8",
              paddingRight: "3rem",
              textDecoration: "line-through",
              [theme.breakpoints.down("md")]: {
                padding: "0.5rem",
                fontSize: "0.7rem",
              },
            })}
          >
            {productPrice}
          </Box>
          <Box
            component={"span"}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "0.7rem",
              },
            })}
          >
            {productPrice - productPrice * (offer / 100)}
          </Box>
          <Box
            component={"span"}
            sx={(theme) => ({
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
            })}
          >
            {offer}%
          </Box>
        </Box>
      </Link>
    </Stack>
  );
}
