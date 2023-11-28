import { Link } from "react-router-dom";
import { React, useState } from "react";
import {
  Badge,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Button,
  Stack,
  Typography,

} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Logo from "../../logo.png";
import "./NavBar.css";
import SearchBox from "../SearchBox/SearchBox";
import NavbarPanelBtn from "../NavbarPanelBtn/NavbarPanelBtn";
import CitiesModal from "../CitiesModal/CitiesModal";
import CardModal from "../CardModal/CardModal";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  color: "#212121",
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
const BadgeStyled = styled(Badge)(({ theme }) => ({
  color: "#000",
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
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
    setCardBar(false);
  };
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
        <CitiesModal
          openLocation={openLocation}
          handleCloselocation={handleCloselocation}
          cityHandeler={cityHandeler}
        />
        <LocationStyled
          startIcon={<FmdGoodOutlinedIcon color="red" />}
          onClick={handleOpenLocation}
        >
          <Stack textAlign="right" marginRight="0.5rem">
            <Typography fontSize="0.7rem" color="#212121">
              انتخاب مکان
            </Typography>
            <Typography fontSize="0.8rem">
              {localStorage.getItem("yourLocation") || "مکان شما"}
            </Typography>
          </Stack>
        </LocationStyled>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex" }}>
          <NavbarPanelBtn />

          <IconButton
            aria-label="card"
            sx={{ color: "#212121", marginRight: "1.5rem" }}
            onClick={openCardHandler}
          >
            <BadgeStyled badgeContent={4}>
              <AddShoppingCartIcon sx={{ fontSize: "1.8rem" }} />
            </BadgeStyled>
          </IconButton>
          {cardBar && (
            <CardModal cardBar={cardBar} closeCardHandler={closeCardHandler} />
          )}
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
