import { React, useState, useRef, useEffect } from "react";
import { Button, Box, Typography, Divider, Icon } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useLocation } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import Modal from "../Modal/Modal";
import "./NavbarPanelBtn.css";

export default function NavbarPanelBtn() {
  const [showList, setShowList] = useState(false);
  const [loggoutSuccessSnackbar, setLoggoutSuccessSnackbar] = useState(false);
  const [dilog, setDialog] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      name: "پیشخوان",
      icon: <AccountCircleOutlinedIcon />,
      to: "/panel/dashboard",
    },
    {
      id: 2,
      name: "سفارش ها",
      icon: <ListAltOutlinedIcon />,
      to: "/panel/orders",
    },
    {
      id: 3,
      name: "علاقه مندی ها",
      icon: <FavoriteBorderOutlinedIcon />,
      to: "/panel/favarates",
    },
  ]);

  const openItemsPanel = () => {
    console.log(dilog);
    if (!showList) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  const handelSelectItem = () => {
    setShowList(false);
  };
  const HandelLogoutUser = () => {
    setDialog(false);
    setLoggoutSuccessSnackbar(true);
    setTimeout(() => {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    }, 1000);
  };
  const username = localStorage.getItem("username");
  const openDialog = () => {
    setDialog(true);
  };
  const closeDialog = () => {
    setDialog(false);
  };

  const closeLoggoutAlertHandeler = () => {
    setLoggoutSuccessSnackbar(false);
  };

  const location = useLocation();
  // const ref = useRef();
  // useEffect(() => {
  //   const checkIfClickOutside = (e) => {
  //     if (
  //       showList &&
  //       !dilog &&
  //       ref.current &&
  //       !ref.current.contains(e.target)
  //     ) {
  //       setShowList(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", checkIfClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", checkIfClickOutside);
  //   };
  // }, [showList]);
  return (
    <Box>
      {username ? (
        <Box>
          <Button
            sx={{
              border: "1px solid #e2e2e2",
              color: "#000",
              borderRadius: "0.7rem",
              padding: "0.6rem",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={openItemsPanel}
            startIcon={
              <AccountCircleOutlinedIcon
                sx={{
                  "&.MuiSvgIcon-root": {
                    fontSize: "1.7rem",
                  },
                  marginLeft: "0.6rem",
                }}
              />
            }
            endIcon={
              showList ? (
                <KeyboardArrowDownOutlinedIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      fontSize: "1.2rem",
                    },
                    marginRight: "1rem",
                  }}
                />
              ) : (
                <KeyboardArrowUpOutlinedIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      fontSize: "1.2rem",
                    },
                    marginRight: "1rem",
                  }}
                />
              )
            }
          >
            {username}
          </Button>
          {showList && (
            <Box
              sx={{
                position: "absolute",
                top: "70px",
                left: "93px",
                background: "#fff",
                width: "179px",
                border: "1px solid #e2e2e2",
                borderRadius: "0.7rem",
                zIndex: "100",
              }}
            >
              {list.map((listItem) => (
                <Box key={listItem.id}>
                  <Link
                    onClick={handelSelectItem}
                    to={listItem.to}
                    className="list-item-navbar"
                  >
                    <Icon>{listItem.icon}</Icon>
                    <Typography sx={{ padding: "0.5rem", fontSize: "0.9rem" }}>
                      {listItem.name}
                    </Typography>
                  </Link>
                  <Divider
                    sx={{ color: "#e2e2e2", width: "90%", margin: "0 auto" }}
                  />
                </Box>
              ))}

              <div onClick={openDialog} className="list-item-navbar">
                <Icon>
                  <LogoutOutlinedIcon sx={{ color: "red" }} />
                </Icon>
                <Typography
                  sx={{ padding: "0.5rem", fontSize: "0.9rem", color: "red" }}
                >
                  خروج از سیستم
                </Typography>
              </div>

              <Modal
                dilog={dilog}
                logOutAccountHandler={HandelLogoutUser}
                closeDialog={closeDialog}
                loggoutSuccessSnackbar={loggoutSuccessSnackbar}
                closeLoggoutAlertHandeler={closeLoggoutAlertHandeler}
              />
            </Box>
          )}
        </Box>
      ) : (
        <Link to="/login">
          <MyButton
            borderradius={"1.8rem"}
            fontsize={"0.7rem"}
            padding={"0.6rem 1rem"}
          >
            ورود / ثبت نام
          </MyButton>
        </Link>
      )}
    </Box>
  );
}
