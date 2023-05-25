import { React } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./Product.css";

export default function Product(props) {
  const {
    productImage,
    productTtile,
    productPrice,
    productRate,
    ProductId,
    offer,
  } = props;

  return (
    <>
      <Card
        sx={{
          width: {
            lg: "25%",
            md: "33.3%",
            sm: "50%",
            xs: "100%",
          },
          height: {
            lg: "24rem",
            md: "23rem",
            sm: "23rem",
            xs: "25rem",
          },
        }}
      >
        <Link to={`/products/${ProductId}`}>
          <CardMedia
            component="img"
            image={productImage}
            alt={productTtile}
            sx={(theme) => ({
              padding: "1rem",
              objectFit: "contain",
              height: "13rem",
              [theme.breakpoints.down("md")]: {
                height: "13rem",
                padding: "0.7rem",
              },
              [theme.breakpoints.down("sm")]: {
                height: "14rem",
              },
            })}
          />
        </Link>

        <CardContent
          sx={{
            padding: "0.2rem",
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <Stack>
            <Typography
              component={"h3"}
              sx={{ height: "4.5rem", textAlign: "center", fontSize: "0.9rem" }}
            >
              {productTtile}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 1rem 0.5rem",
              }}
            >
              <Box>
                <IosShareIcon
                  sx={{
                    color: "#fb4707",
                    fontSize: "1.2rem",
                    marginLeft: "0rem",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                />
                <Typography
                  component={"span"}
                  sx={{ fontSize: "0.7rem", color: "#a8a8a8" }}
                >
                  موجود در انبار
                </Typography>
              </Box>
              <Box>
                <Rating
                  name="half-rating"
                  precision={1}
                  value={productRate}
                  size="small"
                  readOnly
                />
              </Box>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: " 1rem",
                [theme.breakpoints.between("md", "lg")]: {
                  padding: "0.5rem 0.2rem",
                },
                [theme.breakpoints.down("sm")]: {
                  borderTop: "none",
                },
              })}
            >
              <Typography
                component={"del"}
                sx={(theme) => ({
                  color: "#a8a8a8",
                  fontSize: "0.9rem",
                  paddingRight: "0.6rem",
                  textDecoration: "line-through",
                  textAlign: "center",
                  [theme.breakpoints.between("md", "lg")]: {
                    paddingRight: "0.2rem",
                  },
                })}
              >
                {productPrice}
              </Typography>

              <Typography component={"span"} sx={{ fontSize: "0.9rem" }}>
                {productPrice - productPrice * (offer / 100)} تومان
              </Typography>
              <Typography
                component={"span"}
                sx={{
                  fontSize: "0.8rem",
                  backgroundColor: " #fb4208",
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "0.8rem",
                  padding: "0.6rem",
                }}
              >
                {offer}%
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
