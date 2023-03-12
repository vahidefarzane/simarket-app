import React, { useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import YoutubeSearchedForOutlinedIcon from "@mui/icons-material/YoutubeSearchedForOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import "./Panel.css";

const PaperStyled = styled(Paper)(({ theme }) => ({
  borderRadius: "0.7rem",
  marginBottom: "0.7rem",
  padding: "1rem",

  // [theme.breakpoints.down("md")]: {},
  // [theme.breakpoints.up("md")]: {},
}));

export default function Panel() {
  const userName = localStorage.getItem("username");

  const [listItemsPanel, setListItemsPanel] = useState([
    {
      id: 1,
      title: "پیشخوان",
      icon: <GridViewOutlinedIcon />,
      to: "dashboard",
    },
    {
      id: 2,
      title: "سفارش ها",
      icon: <ReceiptLongOutlinedIcon />,
      to: "orders",
    },
    {
      id: 3,
      title: "آدرس ها",
      icon: <AddLocationOutlinedIcon />,
      to: "addresses",
    },
    {
      id: 4,
      title: "علاقه مندی ها",
      icon: <FavoriteBorderOutlinedIcon />,
      to: "favarates",
    },
    {
      id: 5,
      title: "اعلانات من",
      icon: <NotificationsActiveOutlinedIcon />,
      to: "notification",
    },
    { id: 6, title: "نظرات", icon: <CommentOutlinedIcon />, to: "comments" },
    {
      id: 7,
      title: "پیگیری سفارش",
      icon: <YoutubeSearchedForOutlinedIcon />,
      to: "trackingOrder",
    },
    {
      id: 8,
      title: "اطلاعات حساب کاربری",
      icon: <AccountCircleOutlinedIcon />,
      to: "accountInfos",
    },
    { id: 9, title: "خروج از سیستم", icon: <LogoutOutlinedIcon />, to: "" },
  ]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        padding: {
          lg: "1rem 2.5rem",
          xs: "1rem",
        },
        justifyContent: "space-between",
      }}
    >
      <Stack
        sx={{
          width: {
            lg: "22%",
            md: "27%",
          },
        }}
      >
        <Box
          className="box-style"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid ",
              borderRadius: "50%",
              width: "4.5rem",
              height: "4.5rem",
            }}
            component="img"
            src="/images/user-image.png"
          />
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "0.6rem 0 0.2rem",
            }}
          >
            {userName}
          </Typography>
          <Box sx={{ display: "flex", color: "#666363" }}>
            <Link to="accountInfos">
              <BorderColorIcon
                sx={{
                  fontSize: "1rem",
                  marginLeft: "0.4rem",
                  cursor: "pointer",
                  color:"#333"
                }}
              />
            </Link>

            <Typography sx={{ fontSize: "0.8rem" }}>
              اطلاعات حساب کاربری
            </Typography>
          </Box>
        </Box>
        <Box className="box-style">
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Typography
              sx={{
                borderBottom: "1px solid #e3e3e3",
                paddingBottom: "0.7rem",
                fontSize: "1rem",
                color: "#333",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              حساب کاربری شما
            </Typography>
            {listItemsPanel.map((item) => (
              <Link to={item.to}>
                <ListItemButton
                  key={item.id}
                  sx={{
                    "&.MuiButtonBase-root": {
                      textAlign: "right",
                      padding: "0.5rem 0.2rem",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "#333",
                      "&.MuiListItemIcon-root": {
                        minWidth: "2.5rem",
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "#333",
                    }}
                    primary={item.title}
                  />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Stack>
      <Stack
        sx={{
          width: {
            lg: "76.5%",
            md: "71.5%",
          },
        }}
      >
        <Outlet />
      </Stack>
    </Box>
  );
}
