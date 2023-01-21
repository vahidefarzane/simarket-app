import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import IosShareIcon from "@mui/icons-material/IosShare";
import { RiShareForwardBoxFill } from "react-icons/ri";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import "./Product.css";

const useStyles = makeStyles((theme) => ({
  productName: {
    height: "3rem",
    textAlign: "center",
  },
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
  },
  productPriceLast: {
    color: "#a8a8a8",
    paddingRight: "0.8rem",
    textDecoration: "line-through",
    textAlign: "center",
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
  height: 200,
}));
const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: "0.2rem",
  "&:last-child": {
    paddingBottom: 0,
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const { productImage, productTtile, productPrice } = props;
  return (
    <>
      <Card sx={{ width: "25%" }}>
        <CardMediaStyled
          component="img"
          image={productImage}
          alt={productTtile}
        />

        <CardContentStyled>
          <Stack>
            <Typography component={"h3"} className={classes.productName}>
              {productTtile}
            </Typography>
            <Box className={classes.productStockBox}>
              <Box className={classes.stockArchive}>
                <IosShareIcon
                  sx={{
                    color: "#fb4707",
                    fontSize: "1.4rem",
                    marginLeft: "0.5rem",
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
                <StarIcon sx={{ color: "#ffb518" }} />
                <StarIcon sx={{ color: "#ffb518" }} />
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
