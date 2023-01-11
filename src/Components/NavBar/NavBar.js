import React from "react";
import {
  Badge,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Logo from "../../logo.png";
import MyButton from "../MyButton/MyButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "2rem",
  color: "#000",
  backgroundColor: "transparent",
  border: "1px solid gray",
  marginLeft: 0,
  [theme.breakpoints.down("md")]: {
    marginRight: "0.2rem",
  },
  [theme.breakpoints.up("md")]: {
    marginRight: "2rem",
    width: "35%",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 5),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  backgroundColor: "white",
  color: "#000",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const StyledList = styled(List)(({ theme }) => ({
  padding: 0,
  margin: "1rem 1rem 0 1rem",
  display: "flex",
  fontSize: "0.9rem",
}));

const badgeStyle = {
  "& .MuiBadge-badge": {
    backgroundColor: "#fb4707",
    color: "#fff",
  },
};
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function Navbar() {
  return (
    <Box>
      <StyledAppBar>
        <Toolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: {
                sm: "flex",
              },
            }}
          >
            <MenuIcon />
          </StyledIconButton>
          <Box
            component="img"
            sx={{
              height: 50,
              width: {
                md: 130,
                sm: 100,
              },
            }}
            alt="Your logo."
            src={Logo}
          ></Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="جستجو..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <MyButton
              marginleft={"1rem"}
              borderradius={"2rem"}
              fontsize={"0.8rem"}
            >
              ورود / ثبت نام
            </MyButton>
            <IconButton
              // size="large"
              aria-label="show 17 new notifications"
              sx={{ color: "#000" }}
            >
              <Badge badgeContent={4} sx={badgeStyle}>
                <AiOutlineShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
        <StyledList>
          <Link className="list-item-links" to="/categories">
            <ListItem className="list-item">دسته بندی</ListItem>
          </Link>
          <Link className="list-item-links" to="/">
            <ListItem className="list-item">صفحه اصلی</ListItem>
          </Link>
          <Link className="list-item-links" to="/productsList">
            <ListItem className="list-item">لیست کالاها</ListItem>
          </Link>
          <Link className="list-item-links" to="/contactUs">
            <ListItem className="list-item">تماس با ما</ListItem>
          </Link>
        </StyledList>
      </StyledAppBar>
    </Box>
  );
}
