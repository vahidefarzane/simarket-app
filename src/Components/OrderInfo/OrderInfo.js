import { React, useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  InputBase,
  Divider,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MyButton from "../MyButton/MyButton";
import { CartContext } from "../../Contexts/CartContext";
import OrderedProduct from "../OrderedProduct/OrderedProduct";
import {Link} from "react-router-dom";
export default function OrderInfo({ handleNext }) {
  const { total, cart } = useContext(CartContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <Box
        sx={{
          width: {
            md: "70%",
            xs: "100%",
          },
          border: "1px solid #E3E3E3",
          borderRadius: "0.8rem",
          padding: {
            sm: "1.5rem",
            xs: "0.7rem",
          },
        }}
      >
        <OrderedProduct />
        {cart.length !== 0 ? (
          <Box sx={{ display: "flex" }}>
            <InputBase
              sx={{
                border: "1px solid #B2B1B1",
                borderRadius: "0.6rem",
                padding: "0.4rem 0.7rem",
                fontSize: "0.9rem",
                width: {
                  md: "15%",
                  sm: "30%",
                  xs: "40%",
                },
                marginLeft: "1rem",
              }}
              placeholder="کد تخفیف :"
            ></InputBase>
            <MyButton borderradius="0.6rem" fontsizedownmd="0.8rem">
              اعمال کد تخفیف
            </MyButton>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ margin: "1rem 0" }}>
                در سبد خرید شما محصولی وجود ندارد.
              </Typography>
              <Link to="/productsList">مشاهده محصولات</Link>
            </Box>
          </>
        )}
      </Box>

      <Box
        sx={{
          width: {
            md: "28.5%",
            xs: "100%",
          },
          border: "1px solid #E3E3E3",
          borderRadius: "0.8rem",
          padding: {
            md: "2rem 1.5rem",
            xs: "1rem",
          },
          marginTop: {
            md: "0",
            xs: "1rem",
          },
          height: "fit-content",
        }}
      >
        <Box className="card-info-container">
          <Typography className="card-info">قیمت کالا ها</Typography>
          <Typography className="card-info">{total}</Typography>
        </Box>
        <Box className="card-info-container">
          <Typography className="card-info">
            مالیات بر ارزش افزوده برآورد برای ایران
          </Typography>
          <Typography className="card-info">0 تومان</Typography>
        </Box>
        <Box className="card-info-container">
          <Typography className="card-info">تخفیف کالا ها</Typography>
          <Typography className="card-info">0 تومان</Typography>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box className="card-info-container">
          <Typography className="card-info-main">مجموع</Typography>
          <Typography className="card-info-main">{total}</Typography>
        </Box>
        <MyButton
          widthupmd="100%"
          widthdownsm="100%"
          padding="0.7rem"
          borderradius="0.6rem"
          onClick={handleNext}
        >
          اقدام به پرداخت
        </MyButton>
      </Box>
    </Box>
  );
}
