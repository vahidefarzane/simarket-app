import { Link } from "react-router-dom";
import { React, useState } from "react";
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
  Paper,
  Divider,
  BottomNavigationAction,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";

// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import CategoryIcon from "@mui/icons-material/Category";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import "./NavBar.css";
import MenuResponsive from "../MenuResponsive/MenuResponsive";

// desktop styled

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "#212121",
  position: "sticky",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "0.7rem",
  color: "#212121",
  backgroundColor: "transparent",
  border: "1px solid #e2e2e2",
  [theme.breakpoints.down("md")]: {
    margin: "0",
    width: "70%",
    padding: "0",
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 2rem",
    width: "40%",
    padding: "0.15rem",
    fontSize: "0.9rem",
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
const StyledList = styled(List)(() => ({
  padding: 0,
  margin: "1rem 1rem 0 1rem",
  display: "flex",
  fontSize: "0.9rem",
}));

// Responsive Style

const BoxMobileView = styled(Box)(({ theme }) => ({
  margin: "0.8rem 0.7rem",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const BottomNavigationActionStyled = styled(BottomNavigationAction)(
  ({ theme }) => ({
    minWidth: "1rem",
    width:'25%',
    '&.Mui-selected': {
      color:' #fb4707',
    },
    [theme.breakpoints.down("sm")]: {},
  })
);



export default function Navbar() {
  const [value, setValue] = useState(0);
  const mobileview = (
    <BoxMobileView>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          size="small"
        >
          <MenuIcon sx={{ marginLeft: "0.3rem" }} />
          <Typography component="span">منو</Typography>
        </IconButton>
        <Box
          component="img"
          sx={{
            width: 100,
          }}
          alt="Your logo"
          src={Logo}
        ></Box>
        <IconButton color="inherit">
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.7rem",
        }}
      >
        <Search flexGrow="1">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="جستجو..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton aria-label="login or register" sx={{ color: "#212121" }}>
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="show 17 new notifications"
          sx={{ color: "#212121" }}
        >
          <Badge badgeContent={4} sx={badgeStyle}>
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.7rem",
          borderTop: "1px solid #e2e2e2",
          borderBottom: "1px solid #e2e2e2",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "start",
            alignItems: "center",
            margin: "0.2rem 0",
          }}
        >
          <IconButton>
            <FmdGoodOutlinedIcon sx={{ color: "#fb4707" }} />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>
            مکان را جهت فیلتر محصولات انتخاب کنید
          </Typography>
        </Stack>
        <IconButton>
          <ChevronLeftIcon sx={{ color: "#fb4707" }} />
        </IconButton>
      </Stack>
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          justifyContent: "space-between",
          boxShadow: "5px 6px 11px rgb(0 0 0 / 40%)",
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: "1000",
          width: "100%",
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationActionStyled
          label="خانه"
          icon={<HomeIcon className="BottomNavigationAction" />}
        />
        <BottomNavigationActionStyled
          label="دسته ها"
          icon={<CategoryIcon className="BottomNavigationAction" />}
        />
        <BottomNavigationActionStyled
          label="علاقه مندی ها"
          icon={<FavoriteBorderIcon className="BottomNavigationAction" />}
        />
        <BottomNavigationActionStyled
          label="حساب کاربری"
          icon={
            <PersonOutlineOutlinedIcon className="BottomNavigationAction" />
          }
        />
      </BottomNavigation>
    </BoxMobileView>
  );
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
          <LocationStyled startIcon={<FmdGoodOutlinedIcon color="red" />}>
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
      {mobileview}
    </Box>
  );
}
