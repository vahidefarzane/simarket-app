import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import "./Services.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2rem 1rem",
    [theme.breakpoints.down("md")]: {
      margin: "1rem 0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  serviceBox: {
    display: "flex",
    width: "25%",
    height: "6rem",
    alignItems: "center",
    border: "2px dashed #e2e2e2",
    margin: "0.8rem",
    padding: "1rem",
    borderRadius: "1.7rem",
    [theme.breakpoints.down("md")]: {
      height: "5rem",
      margin: "0.3rem",
      padding: "0.6rem",
      borderRadius: "1.3rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "49%",
      margin: "0.1rem",
      padding: "0.5rem",
      borderRadius: "1rem",
    },
    "&:hover": {
      backgroundImage: "linear-gradient(to right, #fb4208, #ff6a00) !important",
      border: "2px solid transparent",
      color: "white",
      "& $serviceText": {
        color: "#fff",
      },
      "& $serviceIcon": {
        color: "#fff",
      },
    },
  },
  serviceText: {
    color: "#b5b5b5",
  },
  serviceIcon: {
    fontSize: "5rem",
    color: "#212121",
    marginLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
}));

export default function Services() {
  const classes = useStyles();
  const [services, setServices] = useState([
    {
      id: 1,
      icon: <SupportOutlinedIcon />,
      text: "پشتیبانی 24/7",
    },
    {
      id: 2,
      icon: <CalendarMonthOutlinedIcon />,
      text: "6 روز گارانتی کالا",
    },
    {
      id: 3,
      icon: <AccountBalanceWalletOutlinedIcon />,
      text: "تضمین قیمت کالا",
    },
    {
      id: 4,
      icon: <LocalShippingOutlinedIcon />,
      text: "ارسال به سراسر کشور",
    },
  ]);
  return (
    <Box className={classes.servicesContainer}>
      {services.map((service) => (
        <Box key={service.id} className={classes.serviceBox}>
          <Stack className={classes.serviceIcon}>{service.icon}</Stack>
          <Stack>
            <Typography
              className={classes.serviceText}
              sx={{
                fontWeight: "600",
                fontSize: "0.9rem",
                marginBottom: "0.6rem",
              }}
            >
              پارس کالا
            </Typography>
            <Typography
              className={classes.serviceText}
              sx={{ fontSize: "0.8rem" }}
            >
              {service.text}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
