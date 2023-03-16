import { Link } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
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
  Divider,
  BottomNavigationAction,
  Modal,
  ListItemText,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BottomNavigation from "@mui/material/BottomNavigation";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import CategoryIcon from "@mui/icons-material/Category";
import MyButton from "../MyButton/MyButton";
import Logo from "../../logo.png";
import "./NavBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchBox from "../SearchBox/SearchBox";
import HomeIcon from "@mui/icons-material/Home";
import productsContext from "../../Contexts/ProductsContext";
import NavbarPanelBtn from "../NavbarPanelBtn/NavbarPanelBtn";
import useFetch from "../../hooks/useFetch";

// desktop styled

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
const badgeStyle = {
  "& .MuiBadge-badge": {
    backgroundColor: "#fb4707",
    color: "#fff",
  },
};
const StyledList = styled(List)(() => ({
  padding: 0,
  margin: "0 1rem 0 1rem",
  display: "flex",
  fontSize: "0.8rem",
  height: "4.5rem",
}));

// Responsive Style

const BoxMobileView = styled(Box)(({ theme }) => ({
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
      color: " #fb4707",
    },
    [theme.breakpoints.down("sm")]: {},
  })
);
const DrawerStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    with: "100%",
    height: "100vh",
    borderRadius: 0,
    padding: "1.5rem",
  },
}));
const MenuBarStyled = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
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

export default function Navbar(props) {
  const [value, setValue] = useState(0);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const [openLocation, setOpenLocation] = useState(false);
  const handleOpenLocation = () => setOpenLocation(true);
  const handleCloselocation = () => setOpenLocation(false);

  const cityHandeler = (e) => {
    setOpenLocation(false);
    localStorage.setItem("yourLocation", `${e.target.innerText}`);
  };

  const { cities, setCities } = useFetch("http://localhost:4000/cities");
  const [cardBar, setCardBar] = useState(false);
  const openCardHandler = () => {
    setCardBar(true);
  };
  const closeCardHandler = () => {
    setCardBar(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  const openMenuBar = () => {
    setShowMenu(true);
  };
  const closeMenuBar = () => {
    setShowMenu(false);
  };
  const contextData = useContext(productsContext);

  function removeUserCartProduct(productID) {}

  const userName = localStorage.getItem("username");
  const mobileview = (
    <BoxMobileView>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          position: props.isSticky ? "fixed" : "unset",
          top: "0",
          right: "0",
          padding: "0.3rem",
          background: "#FFF",
          zIndex: "999",
          boxShadow: props.isSticky
            ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
            : "none",
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
        <SearchBox></SearchBox>
        <Box sx={{ flexGrow: 1 }} />

        <Link to="/login">
          <IconButton aria-label="login or register" sx={{ color: "#212121" }}>
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
              <PersonOutlineOutlinedIcon sx={{ "&.MuiSvgIcon-root": { fontSize: "2rem",marginBottom:'0.35rem' } }} />
            )}
          </IconButton>
        </Link>
        <IconButton
          aria-label="show 17 new notifications"
          sx={{ color: "#212121" }}
          onClick={openCardHandler}
        >
          <Badge badgeContent={contextData.userCart.length} sx={badgeStyle}>
            <AddShoppingCartIcon
              sx={{ marginBottom: "0.4rem", fontSize: "1.6rem" }}
            />
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
          onClick={handleOpenLocation}
        >
          <IconButton>
            <FmdGoodOutlinedIcon sx={{ color: "#fb4707" }} />
          </IconButton>
          <Typography sx={{ fontSize: "0.7rem" }}>
            {localStorage.getItem("yourLocation") ||
              "مکان را جهت فیلتر محصولات انتخاب کنید"}
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
          display: "flex",
          justifyContent: "space-around",
          boxShadow: "5px 6px 11px rgb(0 0 0 / 40%)",
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: "1000",
          width: "100%",
          paddingTop:'0.3rem'
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
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
    </BoxMobileView>
  );
  return (
    <Box>
      <StyledAppBar sx={{ position: props.isSticky ? "fixed" : "unset" }}>
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

          <Modal
            open={openLocation}
            onClose={handleCloselocation}
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
                  <CloseIcon
                    onClick={handleCloselocation}
                    sx={{ cursor: "pointer" }}
                  />
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
                  {cities &&
                    cities.map((city) => (
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

          <Box sx={{ display: "flex" }}>
            <NavbarPanelBtn />

            <IconButton
              aria-label="card"
              sx={{ color: "#212121", marginRight: "1.5rem" }}
              onClick={openCardHandler}
            >
              <Badge badgeContent={contextData.userCart.length} sx={badgeStyle}>
                <AddShoppingCartIcon sx={{ fontSize: "1.8rem" }} />
              </Badge>
            </IconButton>
            {cardBar && (
              <DrawerStyled
                anchor="right"
                open={cardBar}
                onClose={closeCardHandler}
                transitionDuration={700}
              >
                <Box
                  sx={{
                    width: {
                      md: "26rem",
                      sm: "24rem",
                      xs: "100vw",
                    },
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      padding: "1rem",
                      color: "#fff",

                      backgroundColor: "#EF394E",

                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      شما این محصولات را انتخاب کردید
                    </Typography>
                    <CloseIcon
                      onClick={closeCardHandler}
                      sx={{ cursor: "pointer" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "88vh",
                    }}
                  >
                    {contextData.userCart.length !== 0 ? (
                      <Box sx={{ padding: "0 0.5rem" }}>
                        {contextData.userCart.map((product) => (
                          <>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "0 1rem",
                              }}
                            >
                              <IconButton
                                sx={{ p: 0 }}
                                onClick={removeUserCartProduct(product.id)}
                              >
                                <CloseIcon />
                              </IconButton>
                              <Box
                                component="img"
                                src={product.image}
                                sx={{
                                  width: "5rem",
                                  height: "5rem",
                                  margin: "1rem",
                                }}
                              />
                              <Typography
                                sx={{ fontSize: "0.8rem", fontWeight: "600" }}
                              >
                                {product.title}
                              </Typography>
                              <Typography
                                component="span"
                                sx={{ margin: "0 1rem" }}
                              >
                                {product.count}
                              </Typography>
                            </Box>
                            <Divider />
                          </>
                        ))}
                      </Box>
                    ) : (
                      <Box sx={{ margin: "1rem Auto" }}>
                        در سبد خرید شما محصولی وجود ندارد.
                      </Box>
                    )}

                    <Box sx={{ borderTop: "1px solid #E0E0E0" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "1rem",
                        }}
                      >
                        <Typography fontWeight="bold" fontSize="1.1rem">
                          مجموع :
                        </Typography>
                        <Typography fontWeight="bold" fontSize="1.1rem">
                          {contextData.totalPrice}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "0 1rem",
                        }}
                      >
                        <Link
                          to="/cart"
                          className="view-card"
                          onClick={closeCardHandler}
                        >
                          <MyButton
                            widthdownsm="100%"
                            borderradius="0.6rem"
                            padding="0.7rem 0"
                          >
                            مشاهده سبد خرید
                          </MyButton>
                        </Link>
                        <Link
                          to="/checkout"
                          className="bill"
                          onClick={closeCardHandler}
                        >
                          <MyButton
                            widthdownsm="100%"
                            borderradius="0.6rem"
                            padding="0.7rem 0"
                          >
                            تسویه حساب
                          </MyButton>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </DrawerStyled>
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
      {mobileview}
    </Box>
  );
}
