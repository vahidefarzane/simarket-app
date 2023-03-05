import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MyButton from "../MyButton/MyButton";

export default function Orders() {
  const [orders, setOrders] = useState(false);
  return (
    <>
      {orders ? (
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
          <MyButton href="/productsList">مشاهده محصولات</MyButton>
        </Box>
      )}
    </>
  );
}
