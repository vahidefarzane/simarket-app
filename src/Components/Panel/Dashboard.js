import React, { useState } from "react";
import { Box, Typography, Button, Icon } from "@mui/material";
import "./Panel.css";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import CloudOffOutlinedIcon from "@mui/icons-material/CloudOffOutlined";

export default function Dashboard() {
  const [orderView, setOrderView] = useState([
    { id: 1, icon: CloudDownloadOutlinedIcon, title: "جاری" },
    { id: 2, icon: CloudDoneOutlinedIcon, title: "تحویل داده شده" },
    { id: 3, icon: CloudOffOutlinedIcon, title: "لغو شده" },
  ]);
  return (
    <>
      <Box className="box-style">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography className="title-section">سفارش های من</Typography>
          <Button>مشاهده همه</Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          {orderView.map((order) => (
            <Box sx={{ display: "flex", alignItems: "center", width: "18rem" }}>
              <order.icon sx={{ fontSize: "4rem", marginLeft: "0.8rem" }} />
              <Typography sx={{ fontSize: "0.9rem" }}>
                {0} سفارش
                <br /> {order.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
