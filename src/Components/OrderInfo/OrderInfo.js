import { React, useState } from "react";
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

export default function OrderInfo() {
  const [productNumberCart, setProductNumberCart] = useState(1);

  const changeNumber = (e) => {
    setProductNumberCart(Number(e.target.value));
  };

  const plusProductHandler = () => {
    setProductNumberCart((prevNumber) => prevNumber + 1);
  };
  const minusProductHandler = () => {
    setProductNumberCart((prevNumber) => prevNumber - 1);
  };

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: {
              sm: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",

              width: {
                md: "72%",
                xs: "100%",
              },
              flexDirection: {
                sm: "row",
                xs: "column",
              },
            }}
          >
            <Box
              src="./images/jacket.jpg"
              component="img"
              sx={{
                margin: {
                  md: "0 0 0 2rem",
                  sm: "0 0 0 1rem",
                  xs: "0 auto",
                },
                width: {
                  md: "29%",
                  sm: "28%",
                  xs: "60%",
                },
              }}
            ></Box>
            <Box sx={{ marginTop: "1.5rem" }}>
              <Typography sx={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
                جاکت مردانه
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <BeenhereIcon
                  sx={{ fontSize: "0.8rem", marginLeft: "0.4rem" }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      lg: "0.8rem",
                      xs: "0.7rem",
                    },
                  }}
                >
                  گارانتی 18 ماهه فروشگاه اینترنتی پارس کالا
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    border: "1px solid  #ff6a00",
                    borderRadius: "0.6rem",
                    padding: "0.2rem ",
                  }}
                >
                  <IconButton
                    onClick={plusProductHandler}
                    disableRipple={true}
                    sx={{ color: " #ff6a00" }}
                  >
                    <AddIcon />
                  </IconButton>
                  <InputBase
                    onChange={(e) => changeNumber(e)}
                    type="tel"
                    sx={{
                      width: "4rem",
                      color: " #ff6a00",
                      textAlign: "center",
                    }}
                    value={1}
                  >
                    {productNumberCart}
                  </InputBase>
                  <IconButton
                    onClick={minusProductHandler}
                    disableRipple={true}
                    sx={{ color: " #ff6a00" }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Box>
                <Button
                  variant="outlined"
                  disableRipple={true}
                  sx={{
                    color: "#535353",
                    borderColor: "#B2B1B1",
                    marginRight: "1rem",
                    borderRadius: "0.6rem",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderColor: "#B2B1B1",
                    },
                  }}
                  endIcon={
                    <DeleteForeverOutlinedIcon sx={{ marginRight: "0.4rem" }} />
                  }
                >
                  حذف
                </Button>
              </Box>
            </Box>
          </Box>
          <Stack
            sx={{
              marginTop: {
                sm: "0",
                xs: "1.5rem",
              },
            }}
          >
            <Typography
              sx={{
                color: "red",
                fontSize: {
                  md: "0.9rem",
                  sm: "0.7rem",
                  xs: "1rem",
                },
              }}
            >
              {`تخفیف ${"56,000"} تومان`}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1.1rem",
                  sm: "0.9rem",
                  xs: "1.1rem",
                },
                fontWeight: "bold",
              }}
            >
              {` ${"565,000"} تومان`}
            </Typography>
          </Stack>
        </Box>
        <Divider sx={{ margin: "1.5rem 0" }} />
        <Box sx={{ display: "flex" }}>
          <InputBase
            sx={{
              border: "1px solid #B2B1B1",
              borderRadius: "0.6rem",
              padding: "0.4rem 0.7rem",
              fontSize: "0.9rem",
              width: {
                md: "15%",
                sm:'30%',
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
          height:'fit-content',
        }}
      >
        <Box className="card-info-container">
          <Typography className="card-info">قیمت کالا ها</Typography>
          <Typography className="card-info">289,000 تومان</Typography>
        </Box>
        <Box className="card-info-container">
          <Typography className="card-info">
            مالیات بر ارزش افزوده برآورد برای ایران
          </Typography>
          <Typography className="card-info">0 تومان</Typography>
        </Box>
        <Box className="card-info-container">
          <Typography className="card-info">تخفیف کالا ها</Typography>
          <Typography className="card-info">40,000 تومان</Typography>
        </Box>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Box className="card-info-container">
          <Typography className="card-info-main">مجموع</Typography>
          <Typography className="card-info-main">40,000 تومان</Typography>
        </Box>
        <MyButton
          widthupmd="100%"
          widthdownsm="100%"
          padding="0.7rem"
          borderradius="0.6rem"
        >
          اقدام به پرداخت
        </MyButton>
      </Box>
    </Box>
  );
}
