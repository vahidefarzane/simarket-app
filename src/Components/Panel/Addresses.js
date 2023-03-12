import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Addresses() {
  return (
    <Box className="box-style" sx={{ width: {
      md:"50%",
      xs:'100%'
    } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e3e3e3",
          paddingBottom: "0.5rem",
        }}
      >
        <Typography component="h2" sx={{ fontSize: "1rem" }}>
          آدرس صورت حساب
        </Typography>
        <Button href="addAddress">افزودن</Button>
      </Box>
      <Typography sx={{ paddingTop: "0.8rem", fontSize: "0.9rem" }}>
        شما هنوز آدرسی ثبت نکرده اید.
      </Typography>
    </Box>
  );
}
