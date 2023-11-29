import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  Divider,
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
import CategoryIcon from "@mui/icons-material/Category";
import Logo from "../../logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBox from "../SearchBox/SearchBox";
import CitiesModal from "./CitiesModal";
import CardBtnNavBar from "./CardBtnNavBar";
import {
  NavContainer,
  BottomNavigationActionStyled,
  MenuBarStyled,
} from "../../Style/styles";
import "./NavBar.css";

function MobileNavBar({ isSticky }) {
  const [showMenu, setShowMenu] = useState(false);
  const userName = localStorage.getItem("username");

  const openMenuBar = () => {
    setShowMenu(true);
  };
  const closeMenuBar = () => {
    setShowMenu(false);
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
        <CardBtnNavBar />
      </Stack>

      <CitiesModal />
      {/* <BottomNavigationMenu /> */}
    </NavContainer>
  );
}

// function BottomNavigationMenu() {
//   const [bottomNavigationValue, setBottomNavigationValue] = useState(0);
//   return (
//     <BottomNavigation
//       showLabels
//       value={bottomNavigationValue}
//       sx={{
//         display: "flex",
//         justifyContent: "space-around",
//         boxShadow: "5px 6px 11px rgb(0 0 0 / 40%)",
//         position: "fixed",
//         bottom: 0,
//         right: 0,
//         left: 0,
//         zIndex: "1000",
//         width: "100%",
//         paddingTop: "0.3rem",
//       }}
//       onChange={(event, newValue) => {
//         setBottomNavigationValue(newValue);
//       }}
//     >
//       <Link to="/">
//         <BottomNavigationActionStyled
//           showLabel={true}
//           label="خانه"
//           icon={<HomeIcon className="BottomNavigationAction" />}
//         />
//       </Link>
//       <Link>
//         <BottomNavigationActionStyled
//           showLabel={true}
//           label="دسته ها"
//           icon={<CategoryIcon className="BottomNavigationAction" />}
//         />
//       </Link>
//       <Link to="/panel/favarates">
//         <BottomNavigationActionStyled
//           showLabel={true}
//           label="علاقه مندی ها"
//           icon={<FavoriteBorderIcon className="BottomNavigationAction" />}
//         />
//       </Link>
//       <Link to="/panel/dashboard">
//         <BottomNavigationActionStyled
//           showLabel={true}
//           label="حساب کاربری"
//           icon={
//             <PersonOutlineOutlinedIcon className="BottomNavigationAction" />
//           }
//         />
//       </Link>
//     </BottomNavigation>
//   );
// }

export default MobileNavBar;
