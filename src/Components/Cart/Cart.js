import { React, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  StepButton,
} from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

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

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

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
                    fontWeight:'bold',
                    
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
            width: "75%",
            border: "1px solid #E3E3E3",
            borderRadius: "0.8rem",
          }}
        >
          {activeStep === 0 && <Box>1</Box>}
          {activeStep === 1 && <Box>2</Box>}
          {activeStep === 2 && <Box>3</Box>}
        </Box>
        <Box
          sx={{
            width: "23.5%",
            border: "1px solid #E3E3E3",
            borderRadius: "0.8rem",
          }}
        >
          fghjkl
        </Box>
      </Box>
    </Stack>
  );
}
