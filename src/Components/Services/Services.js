import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import "./Services.css";

export default function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      icon: (
        <SupportOutlinedIcon
          sx={{
            fontSize: {
              md: "3.9rem",
              sm: "3rem",
              xs: "2.5rem",
            },
          }}
        />
      ),
      text: "پشتیبانی 24/7",
    },
    {
      id: 2,
      icon: (
        <CalendarMonthOutlinedIcon
          sx={{
            fontSize: {
              md: "3.9rem",
              sm: "3rem",
              xs: "2.5rem",
            },
          }}
        />
      ),
      text: "6 روز گارانتی کالا",
    },
    {
      id: 3,
      icon: (
        <AccountBalanceWalletOutlinedIcon
          sx={{
            fontSize: {
              md: "3.9rem",
              sm: "3rem",
              xs: "2.5rem",
            },
          }}
        />
      ),
      text: "تضمین قیمت کالا",
    },
    {
      id: 4,
      icon: (
        <LocalShippingOutlinedIcon
          sx={{
            fontSize: {
              md: "3.9rem",
              sm: "3rem",
              xs: "2.5rem",
            },
          }}
        />
      ),
      text: "ارسال به سراسر کشور",
    },
  ]);
  return (
    <Box
      sx={(theme) => ({
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
      })}
    >
      {services.map((service) => (
        <Box
          key={service.id}
          sx={(theme) => ({
            display: "flex",
            width: "25%",
            height: "7rem",
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
              height: "4rem",
              width: "49%",
              margin: "1px",
              padding: "0.1rem",
              borderRadius: "1rem",
            },

            "&:hover": {
              backgroundImage:
                "linear-gradient(to right, #fb4208, #ff6a00) !important",
              border: "2px solid transparent",
              color: "white",
              "& $serviceText": {
                color: "#fff",
              },
              "& $serviceIcon": {
                color: "#fff",
              },
            },
          })}
        >
          <Stack
            sx={(theme) => ({
              color: "#212121",
              marginLeft: "0.9rem",

              [theme.breakpoints.down("sm")]: {
                marginLeft: "0.7rem",
              },
            })}
          >
            {service.icon}
          </Stack>
          <Stack>
            <Typography
              sx={{
                
                fontWeight: "600",
                fontSize: {
                  md: "0.9rem",
                  sm: "0.7rem",
                  xs: "0.6rem",
                },
                marginBottom: {
                  md: "0.6rem",
                  sm: "0.4rem",
                  xs: "0.2rem",
                },
              }}
            >
              پارس کالا
            </Typography>
            <Typography
              sx={{
                
                fontSize: {
                  md: "0.9rem",
                  sm: "0.7rem",
                  xs: "0.6rem",
                },
              }}
            >
              {service.text}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
