import { React, useEffect, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  StepButton,
  Divider,
  IconButton,
  InputBase,
} from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import "./cart.css";

const steps = ["سبد خرید", "صورتحساب", "فاکتور"];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: " #ff6a00",
      borderTopWidth: 2,
      borderRadius: 1,
    },
  },

  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

export default function Cart() {
  const [activeStep, setActiveStep] = useState(0);
  const [productNumberCart, setProductNumberCart] = useState(1);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const plusProductHandler = () => {
    setProductNumberCart((prevNumber) => prevNumber + 1);
  };
  const minusProductHandler = () => {
    setProductNumberCart((prevNumber) => prevNumber - 1);
  };
  const changeNumber = (e) => {
    setProductNumberCart(Number(e.target.value));
  };
  useEffect(() => {
    
    console.log(productNumberCart);
  }, [productNumberCart]);

  return (
    <Stack sx={{ marginTop: "8rem", padding: "2.5rem" }}>
      <Stack
        sx={{
          border: "1px solid #E3E3E3",
          borderRadius: "0.8rem",
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
        }}
      >
        <Box component="img" src={Logo} sx={{ width: "15%", margin: "1rem" }} />
        <Box sx={{ width: "50%" }}>
          <Stepper
            nonLinear
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map((label, index) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#FF6A00",
                    fontWeight: "bold",
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "#FF6A00",
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "#fff",
                  },
                  "& .MuiSvgIcon-root": {
                    marginLeft: "0.6rem",
                  },
                }}
              >
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            width: "70%",
            border: "1px solid #E3E3E3",
            borderRadius: "0.8rem",
            padding: "1rem",
          }}
        >
          {activeStep === 0 && (
            <Box>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <Box
                  src="./images/jacket.jpg"
                  component="img"
                  sx={{ width: "30%" }}
                ></Box>
                <Box>
                  <Typography>{productNumberCart}</Typography>
                  <Box
                    sx={{
                      border: "1px solid  #ff6a00",
                      borderRadius: "0.6rem",
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
                </Box>
              </Box>
            </Box>
          )}
          {activeStep === 1 && <Box>2</Box>}
          {activeStep === 2 && <Box>3</Box>}
        </Box>
        {activeStep === 0 && (
          <Box
            sx={{
              width: "28.5%",
              border: "1px solid #E3E3E3",
              borderRadius: "0.8rem",
              padding: "2rem 1.5rem",
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
            <MyButton widthupmd="100%" padding="0.7rem" borderradius="0.6rem">
              اقدام به پرداخت
            </MyButton>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
