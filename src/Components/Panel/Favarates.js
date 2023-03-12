
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MyButton from "../MyButton/MyButton";

export default function Favarates() {
  const [favarates, setFavarates] = useState(false);
  return (
    <>
      {favarates ? (
        <Box>yes</Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #fb4707",
            padding: "1rem",
            backgroundColor: "#ef394e05",
            borderRadius: "0.7rem",
          }}
        >
          <Typography>محصولی در اینجا یافت شد.</Typography>
          <MyButton
            href="/productsList"
            widthupmd="25%"
            widthbetweenmdsm="25%"
            widthdownsm="32%"
            fontsizeupmd="0.9rem"
            fontsizedownmd="0.8rem"
          >
            مشاهده محصولات
          </MyButton>
        </Box>
      )}
    </>
  );
}
