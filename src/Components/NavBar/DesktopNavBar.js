import { Link, NavLink } from "react-router-dom";
import { Box, Toolbar, ListItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo";
import "./NavBar.css";
import SearchBox from "../SearchBox";
import NavbarPanelBtn from "../NavbarPanelBtn/NavbarPanelBtn";
import CitiesModal from "./CitiesModal";
import CardBtnNavBar from "./CardBtnNavBar";
import { StyledAppBar, StyledList } from "../../Style/styles";

function DesktopNavBar({ isSticky }) {
  return (
    <StyledAppBar sx={{ position: isSticky ? "fixed" : "unset" }}>
      <Toolbar>
        <Logo />

        <SearchBox></SearchBox>
        <CitiesModal />

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex" }}>
          <NavbarPanelBtn />

          <CardBtnNavBar />
        </Box>
      </Toolbar>

      <StyledList>
        <Link className="categories-navbar">
          <MenuIcon sx={{ marginLeft: "0.7rem" }} />
          <Typography
            sx={{
              fontSize: "0.85rem",
              paddingLeft: "1rem",
              fontWeight: "bold",
            }}
          >
            دسته بندی
          </Typography>
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-item-active" : "list-item-links"
          }
          to="/"
        >
          صفحه اصلی
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-item-active" : "list-item-links"
          }
          to="/productsList"
        >
          لیست کالاها
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "list-item-active" : "list-item-links"
          }
          to="/contactUs"
        >
          تماس با ما
        </NavLink>
      </StyledList>
    </StyledAppBar>
  );
}

export default DesktopNavBar;
