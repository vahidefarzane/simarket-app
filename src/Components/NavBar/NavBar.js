import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
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
  TextField,
  Modal,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";

import HomeIcon from "@mui/icons-material/Home";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";

import CategoryIcon from "@mui/icons-material/Category";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import "./NavBar.css";
import MenuResponsive from "../MenuResponsive/MenuResponsive";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchBox from "../SearchBox/SearchBox";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// desktop styled

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "#212121",
  position: "sticky",
  height: "7rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingTop: "0.2rem",
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
    width: "25%",
    "&.Mui-selected": {
      color: " #fb4707",
    },
    [theme.breakpoints.down("sm")]: {},
  })
);
const ModalStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  [theme.breakpoints.down("sm")]: {
    with: "100%",
    height: "100vh",
    borderRadius: 0,
    padding: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
    borderRadius: "0.6rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "34rem",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "1rem 0.5rem",
  },
}));

export default function Navbar() {
  const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;


  const [openLocation, setOpenLocation] = useState(false);
  const handleOpen = () => setOpenLocation(true);
  const handleClose = () => setOpenLocation(false);

  const cityHandeler = (e) => {
    setOpenLocation(false);
    localStorage.setItem("yourLocation", `${e.target.innerText}`);
  };
  const [cities, setCities] = useState([
    { id: 1, name: "خراسان رضوی" },
    { id: 2, name: "تهران" },
    { id: 3, name: "شیراز" },
    { id: 4, name: "یزد" },
    { id: 5, name: "اصفحان" },
    { id: 6, name: "مازندران" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
    { id: 7, name: "کرمان" },
  ]);

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
        <SearchBox></SearchBox>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/login">
          <IconButton aria-label="login or register" sx={{ color: "#212121" }}>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Link>
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
          onClick={handleOpen}
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

          <LocationStyled
            startIcon={<FmdGoodOutlinedIcon color="red" />}
            onClick={handleOpen}
          >
            <Stack textAlign="right" marginRight="0.5rem">
              <Typography fontSize="0.7rem" color="#212121">
                انتخاب مکان
              </Typography>
              <Typography fontSize="0.8rem">
                {localStorage.getItem("yourLocation")}
              </Typography>
            </Stack>
          </LocationStyled>

          <Modal
            open={openLocation}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalStyled>
              <Stack sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography id="modal-modal-title" component="h2">
                    منطقه ارسال خود را انتخاب کنید
                  </Typography>
                  <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                </Box>
                <Divider />
                <List
                  sx={{
                    width: "100%",
                    padding: 0,
                    overflowY: "scroll",
                    height: "400px",
                  }}
                >
                  {cities.map((city) => (
                    <>
                      <ListItem
                        key={city.id}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "0.3rem 0",
                          cursor: "pointer",
                          alignContent: "center",
                        }}
                      >
                        <ListItemText
                          componen="div"
                          sx={{ textAlign: "right" }}
                          onClick={(e) => cityHandeler(e)}
                        >
                          {city.name}
                        </ListItemText>
                        <ListItemIcon
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <ChevronLeftIcon sx={{ fontSize: "1.1rem" }} />
                        </ListItemIcon>
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Stack>
            </ModalStyled>
          </Modal>
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <Link to="/login">
              <MyButton
                marginleft={"1.5rem"}
                borderradius={"1.8rem"}
                fontsize={"0.8rem"}
                padding={"0.75rem 1.5rem"}
              >
                ورود / ثبت نام
              </MyButton>
            </Link>
            <IconButton aria-label="card" sx={{ color: "#212121" }}>
              <Badge badgeContent={4} sx={badgeStyle}>
                <AddShoppingCartIcon sx={{ fontSize: "1.8rem" }} />
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
