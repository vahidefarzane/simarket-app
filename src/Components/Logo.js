import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import logo from "../logo.png";

function Logo() {
  return (
    <Link to="/" className="logo-header">
      <Box
        sx={(theme) => ({
          color: "#fb4707",
          fontSize: "1.5rem",
          fontWeight: "900",
          letterSpacing: " -2px",
          lineHeight: "200%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
          },
        })}
      >
        سی
      </Box>
      <Box
        component="img"
        sx={(theme) => ({
          width: {
            md: "50px",
            sm: "45px",
            xs: "45px",
          },
          height: {
            md: "50px",
            sm: "45px",
            xs: "45px",
          },
        })}
        alt="Your logo"
        src={logo}
      ></Box>
      <Box
        sx={(theme) => ({
          color: "#fb4707",
          fontSize: "1.5rem",
          fontWeight: "900",
          letterSpacing: " -2px",
          lineHeight: "200%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
          },
        })}
      >
        مارکت
      </Box>
    </Link>
  );
}

export default Logo;
