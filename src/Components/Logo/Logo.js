import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import logo from "../../logo.png";

function Logo() {
  return (
    <Link to="/" className="logo-header">
        <Box
        sx={{
          color: "#fb4707",
          fontSize: "1.5rem",
          fontWeight: "900",
          letterSpacing: " -2px",
          lineHeight: "200%",
        }}
      >
        سی 
      </Box>
      <Box
        component="img"
        sx={{
          height: 50,
          width: 50,
        }}
        alt="Your logo"
        src={logo}
      ></Box>
      <Box
        sx={{
          color: "#fb4707",
          fontSize: "1.5rem",
          fontWeight: "900",
          letterSpacing: " -2px",
          lineHeight: "200%",
        }}
      >
     مارکت
      </Box>
    </Link>
  );
}

export default Logo;
