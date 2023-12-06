import { React, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Checkout from "../Checkout/Checkout";
import Logo from "../../logo.png";
import "./cart.css";
import OrderReceived from "../../Components/OrderReceived/OrderReceived";
import OrderInfo from "../../Components/OrderInfo/OrderInfo";
const steps = ["سبد خرید", "صورتحساب", "فاکتور"];

export default function Cart() {
  // const [activeStep, setActiveStep] = useState(0);
  // const handleStep = (step) => () => {

  //     setActiveStep(step);

  // };

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack
      sx={{
        padding: {
          md: "2.5rem",
          xs: "1rem",
        },
      }}
    >
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
        <Box
          sx={{
            width: {
              lg: "60%",
              md: "70%",
              sm: "80%",
              xs: "100%",
            },
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {
                sx: {
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
                },
              };
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </Stack>

      {activeStep === 0 && <OrderInfo handleNext={handleNext} />}
      {activeStep === 1 && (
        <Checkout handleBack={handleBack} handleNext={handleNext} />
      )}
      {activeStep === 2 && (
        <OrderReceived handleBack={handleBack} handleNext={handleNext} />
      )}
    </Stack>
  );
}
