import { Link } from "react-router-dom";
import { Box, Toolbar, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../logo.png";
import "../../Style/NavBarStyles/NavBar.css";
import SearchBox from "../SearchBox/SearchBox";
import NavbarPanelBtn from "../NavbarPanelBtn/NavbarPanelBtn";
import CitiesModal from "./CitiesModal";
import CardBtnNavBar from "./CardBtnNavBar";
import {
  StyledAppBar,
  StyledList,
} from "../../Style/NavBarStyles/NavBarStyles";

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
