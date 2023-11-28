import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { React, useState } from "react";

import {
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  Divider,
  BottomNavigationAction,
  Drawer,
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import Logo from "../../logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import SearchBox from "../SearchBox/SearchBox";
import CardModal from "../CardModal/CardModal";
import CitiesModal from "../CitiesModal/CitiesModal";

const NavContainer = styled(Box)(({ theme }) => ({
  padding: "0.8rem 0.7rem ",
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
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {},
  })
);
const MenuBarStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const BadgeStyled = styled(Badge)(({ theme }) => ({
  color: "#000",
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

function MobileNavBar({ isSticky }) {
  const [showMenu, setShowMenu] = useState(false);
  const userName = localStorage.getItem("username");

  const openMenuBar = () => {
    setShowMenu(true);
  };
  const closeMenuBar = () => {
    setShowMenu(false);
  };
  const [openLocation, setOpenLocation] = useState(false);
  const handleOpenLocation = () => setOpenLocation(true);
  const handleCloselocation = () => setOpenLocation(false);

  const cityHandeler = (e) => {
    setOpenLocation(false);
    localStorage.setItem("yourLocation", `${e.target.innerText}`);
  };
  const [cardBar, setCardBar] = useState(false);
  const openCardHandler = () => {
    setCardBar(true);
  };
  const closeCardHandler = () => {
    console.log("hi");
    setCardBar(false);
  };

  return (
    <NavContainer>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          position: isSticky ? "fixed" : "unset",
          top: "0",
          right: "0",
          padding: "0.3rem",
          background: "#FFF",
          zIndex: "999",
          boxShadow: isSticky ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          size="small"
          onClick={openMenuBar}
        >
          <MenuIcon sx={{ marginLeft: "0.3rem" }} />
        </IconButton>
        {showMenu && (
          <MenuBarStyled anchor="right" open={showMenu} onClose={closeMenuBar}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: {
                  sm: "270px",
                  xs: "220px",
                },
              }}
            >
              <Link to="/" style={{ display: "flex" }}>
                <Box
                  component="img"
                  src={Logo}
                  sx={{
                    width: "40%",
                    margin: "auto",
                    padding: "1rem 0",
                  }}
                ></Box>
              </Link>
              <List>
                {[
                  {
                    id: 1,
                    listName: "صفحه اصلی",
                    icon: <HomeOutlinedIcon />,
                    to: "/",
                  },
                  {
                    id: 2,
                    listName: "دسته بندی",
                    icon: <CategoryOutlinedIcon />,
                    to: "./categories",
                  },
                  {
                    id: 3,
                    listName: "لیست کالاها",
                    icon: <ListOutlinedIcon />,
                    to: "/productsList",
                  },
                  {
                    id: 4,
                    listName: "تماس با ما",
                    icon: <PhoneCallbackOutlinedIcon />,
                    to: "/contactUs",
                  },
                ].map((listItem) => (
                  <>
                    <Link
                      key={listItem.id}
                      className="list-item-menu-bar"
                      to={listItem.to}
                      onClick={closeMenuBar}
                    >
                      {listItem.icon}
                      <ListItem
                        sx={{
                          margin: 0,
                          fontSize: "0.9rem",
                          color: "#000",
                          padding: "0 0.5rem",
                        }}
                      >
                        {listItem.listName}
                      </ListItem>
                    </Link>
                    <Divider />
                  </>
                ))}
              </List>
            </Box>
          </MenuBarStyled>
        )}
        <Link to="/">
          <Box
            component="img"
            sx={{
              width: 100,
            }}
            alt="Your logo"
            src={Logo}
          ></Box>
        </Link>
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
        <SearchBox />
        <Box sx={{ flexGrow: 1 }} />

        <Link to="/login">
          <IconButton
            aria-label="login or register"
            sx={{ color: "secondary.main" }}
          >
            {userName ? (
              <Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "0.6rem",
                    position: "relative",
                    color: "#000",
                    backgroundColor: "green",
                    right: "12px",
                    bottom: "4px",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "0.1rem 0.3rem",
                  }}
                >
                  ✔
                </Typography>
                <PersonOutlineOutlinedIcon
                  sx={{ "&.MuiSvgIcon-root": { fontSize: "2rem" } }}
                />
              </Box>
            ) : (
              <PersonOutlineOutlinedIcon
                sx={{
                  "&.MuiSvgIcon-root": {
                    fontSize: "2rem",
                    marginBottom: "0.35rem",
                  },
                }}
              />
            )}
          </IconButton>
        </Link>
        <IconButton
          aria-label="show 17 new notifications"
          color="primary"
          onClick={openCardHandler}
        >
          <BadgeStyled badgeContent={4}>
            <AddShoppingCartIcon
              sx={{ marginBottom: "0.4rem", fontSize: "1.6rem" }}
            />
          </BadgeStyled>
          {cardBar && (
            <CardModal cardBar={cardBar} closeCardHandler={closeCardHandler} />
          )}
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
          onClick={handleOpenLocation}
        >
          <CitiesModal
            openLocation={openLocation}
            handleCloselocation={handleCloselocation}
            cityHandeler={cityHandeler}
          />
          <IconButton>
            <FmdGoodOutlinedIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>
            {localStorage.getItem("yourLocation") ||
              "مکان را جهت فیلتر محصولات انتخاب کنید"}
          </Typography>
        </Stack>
        <IconButton>
          <ChevronLeftIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Stack>
      <BottomNavigationMenu />
    </NavContainer>
  );
}

function BottomNavigationMenu() {
  const [bottomNavigationValue, setBottomNavigationValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={bottomNavigationValue}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "5px 6px 11px rgb(0 0 0 / 40%)",
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: "1000",
        width: "100%",
        paddingTop: "0.3rem",
      }}
      onChange={(event, newValue) => {
        setBottomNavigationValue(newValue);
      }}
    >
      <Link to="/">
        <BottomNavigationActionStyled
          showLabel={true}
          label="خانه"
          icon={<HomeIcon className="BottomNavigationAction" />}
        />
      </Link>
      <Link>
        <BottomNavigationActionStyled
          showLabel={true}
          label="دسته ها"
          icon={<CategoryIcon className="BottomNavigationAction" />}
        />
      </Link>
      <Link to="/panel/favarates">
        <BottomNavigationActionStyled
          showLabel={true}
          label="علاقه مندی ها"
          icon={<FavoriteBorderIcon className="BottomNavigationAction" />}
        />
      </Link>
      <Link to="/panel/dashboard">
        <BottomNavigationActionStyled
          showLabel={true}
          label="حساب کاربری"
          icon={
            <PersonOutlineOutlinedIcon className="BottomNavigationAction" />
          }
        />
      </Link>
    </BottomNavigation>
  );
}

export default MobileNavBar;
