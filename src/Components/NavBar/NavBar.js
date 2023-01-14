import { Link } from "react-router-dom";
import React from "react";
import {
  Badge,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  List,
  ListItem,
  Grid,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import "./NavBar.css";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "#212121",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const Search = styled("div")(() => ({
  width: "40%",
  position: "relative",
  borderRadius: "0.7rem",
  color: "#212121",
  backgroundColor: "transparent",
  border: "1px solid #e2e2e2",
  margin: "0 2rem",
  padding: "0.15rem",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#212121",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 5),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
const LocationStyled = styled(Button)(() => ({
  borderRadius: "0.7rem",
  cursor: "pointer",
  border: "1px solid #e2e2e2",
  height: "3rem",
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

const StyledList = styled(List)(({ theme }) => ({
  padding: 0,
  margin: "1rem 1rem 0 1rem",
  display: "flex",
  fontSize: "0.9rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const BoxMobileView = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export default function Navbar() {
  const mobileview = (
    <BoxMobileView>
      <Box>
        <StyledIconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
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
          alt="Your logo"
          src={Logo}
        ></Box>
      </Box>
    </BoxMobileView>
  );
  {
    /* <IconButton
              // size="large"
              aria-label="login or register"
              sx={{ color: "#212121" }}
            >
              <AccountCircleIcon />
            </IconButton> */
  }
  return (
    <Box>
      <StyledAppBar>
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 50,
              width: 130,
            }}
            alt="Your logo"
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
          <LocationStyled startIcon={<FmdGoodOutlinedIcon color="#212121" />}>
            <Stack textAlign="right" marginRight="0.5rem">
              <Typography fontSize="0.7rem" color="#212121">
                انتخاب مکان
              </Typography>
              <Typography fontSize="0.8rem">موقعیت شما</Typography>
            </Stack>
          </LocationStyled>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <MyButton
              marginleft={"1.2rem"}
              borderradius={"0.7rem"}
              fontsize={"0.8rem"}
              padding={"0.75rem 1.5rem"}
            >
              ورود / ثبت نام
            </MyButton>
            <IconButton
              aria-label="show 17 new notifications"
              sx={{ color: "#212121" }}
            >
              <Badge badgeContent={4} sx={badgeStyle}>
                <AddShoppingCartIcon />
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
      {/* {mobileview} */}
    </Box>
  );
}
