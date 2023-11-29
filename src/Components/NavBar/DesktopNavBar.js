import { Link } from "react-router-dom";
import { React, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../logo.png";
import "./NavBar.css";
import SearchBox from "../SearchBox/SearchBox";
import NavbarPanelBtn from "../NavbarPanelBtn/NavbarPanelBtn";
import CitiesModal from "../CitiesModal/CitiesModal";
import CardBtnNavBar from "./CardBtnNavBar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "#212121",
  height: "7rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingTop: "0.3rem",
  },
}));

const StyledList = styled(List)(() => ({
  padding: 0,
  margin: "0 1rem 0 1rem",
  display: "flex",
  fontSize: "0.8rem",
  height: "4.5rem",
}));

function DesktopNavBar({ isSticky }) {

  return (
    <StyledAppBar sx={{ position: isSticky ? "fixed" : "unset" }}>
      <Toolbar>
        <Link to="/">
          <Box
            component="img"
            sx={{
              height: 50,
              width: 130,
            }}
            alt="Your logo"
            src={Logo}
          ></Box>
        </Link>

        <SearchBox></SearchBox>
        <CitiesModal />

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex" }}>
          <NavbarPanelBtn />

          <CardBtnNavBar />
        </Box>
      </Toolbar>

      <StyledList>
        <Link className="list-item-links">
          <ListItem className="list-item">
            <MenuIcon sx={{ marginLeft: "0.7rem" }} />
            <Typography
              sx={{
                borderLeft: "2px solid",
                fontSize: "0.85rem",
                paddingLeft: "1rem",
                fontWeight: "bold",
              }}
            >
              دسته بندی
            </Typography>
          </ListItem>
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
  );
}

export default DesktopNavBar;
