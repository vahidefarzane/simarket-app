import React from "react";
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
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import IosShareIcon from "@mui/icons-material/IosShare";
import "./Product.css";

const useStyles = makeStyles((theme) => ({
  productName: {},
  productStockBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1rem 0.5rem",
  },
  stockArchive: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  productPriceBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: " 1rem",
    borderTop: "1px dashed #e2e2e2",
    [theme.breakpoints.between("md", "lg")]: {
      padding: "0.5rem 0.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      borderTop: "none",
    },
  },
  productPriceLast: {
    color: "#a8a8a8",
    paddingRight: "0.6rem",
    textDecoration: "line-through",
    textAlign: "center",
    [theme.breakpoints.between("md", "lg")]: {
      paddingRight: "0.2rem",
    },
  },
  productPriceOff: {
    backgroundColor: " #fb4208",
    color: "white",
    fontWeight: "600",
    borderRadius: "0.8rem",
    padding: "0.6rem",
  },
}));
const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
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
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: "0.2rem",
  "&:last-child": {
    paddingBottom: 0,
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const { productImage, productTtile, productPrice, productRate, ProductId } =
    props;
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
            md: "22rem",
            sm: "23rem",
            xs: "25rem",
          },
        }}
      >
        <Link to="/product">
          <CardMediaStyled
            component="img"
            image={productImage}
            alt={productTtile}
          />
        </Link>

        <CardContentStyled>
          <Stack>
            <Typography
              component={"h3"}
              sx={{ height: "4.5rem", textAlign: "center",fontSize:'0.9rem' }}
            >
              {productTtile}
            </Typography>
            <Box className={classes.productStockBox}>
              <Box className={classes.stockArchive}>
                <IosShareIcon
                  sx={{
                    color: "#fb4707",
                    fontSize: "1.2rem",
                    marginLeft: "0rem",
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
            <Box className={classes.productPriceBox}>
              <Typography
                component={"del"}
                className={classes.productPriceLast}
                sx={{ fontSize: "0.9rem" }}
              >
                {productPrice}
              </Typography>

              <Typography
                component={"span"}
                className={classes.productPriceNew}
                sx={{ fontSize: "0.9rem" }}
              >
                {productPrice} تومان
              </Typography>
              <Typography
                component={"span"}
                className={classes.productPriceOff}
                sx={{ fontSize: "0.8rem" }}
              >
                12%
              </Typography>
            </Box>
          </Stack>
        </CardContentStyled>
      </Card>
    </>
  );
}
