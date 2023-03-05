import { React, useState, useRef, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  Divider,
  Icon,
  Snackbar,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from "@mui/material/Alert";

import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import "./NavbarPanelBtn.css";

export default function NavbarPanelBtn() {
  const [showLists, setShowLists] = useState(false);
  const [loggoutSuccessSnackbar, setLoggoutSuccessSnackbar] = useState(false);
  const [dilog, setDialog] = useState(false);
  const [list, setList] = useState([
    { id: 1, name: "پیشخوان", icon: <AccountCircleOutlinedIcon /> },
    { id: 2, name: "سفارش ها", icon: <ListAltOutlinedIcon /> },
    { id: 3, name: "علاقه مندی ها", icon: <FavoriteBorderOutlinedIcon /> },
  ]);
  const userName = localStorage.getItem("username");

  const openItemsPanel = () => {
    if (showLists) {
      setShowLists(false);
    } else {
      setShowLists(true);
    }
  };

  const clickHandeler = () => {
    setShowLists(false);
  };
  const logOutAccountHandler = () => {
    setDialog(false);
    setLoggoutSuccessSnackbar(true);
    setTimeout(() => {
      localStorage.removeItem("username");
    }, 2000);
  };

  const openDialog = () => {
    setDialog(true);
  };
  const closeDialog = () => {
    setDialog(false);
  };

  const closeLoggoutAlertHandeler = () => {
    setLoggoutSuccessSnackbar(false);
  };

  return (
    <Box>
      {userName ? (
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
              <KeyboardArrowUpOutlinedIcon
                sx={{
                  "&.MuiSvgIcon-root": {
                    fontSize: "1.2rem",
                  },
                  marginRight: "1rem",
                }}
              />
            }
          >
            {userName}
          </Button>
          {showLists && (
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
                <>
                  <Link
                    onClick={clickHandeler}
                    to="/panel"
                    key={listItem.id}
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
                </>
              ))}
              <Link onClick={openDialog} to="" className="list-item-navbar">
                <Icon>
                  <LogoutOutlinedIcon />
                </Icon>
                <Typography sx={{ padding: "0.5rem", fontSize: "0.9rem" }}>
                  خروج از سیستم
                </Typography>
              </Link>
              <Dialog open={dilog} onClose={closeDialog}>
                <DialogContent>
                  <DialogContentText>
                    آیا میخواهید از حساب خود خارج شوید؟
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={logOutAccountHandler}>بله</Button>
                  <Button onClick={closeDialog}>خیر</Button>
                </DialogActions>
              </Dialog>
              <Snackbar
                open={loggoutSuccessSnackbar}
                autoHideDuration={2000}
                onClose={closeLoggoutAlertHandeler}
              >
                <MuiAlert elevation={6} variant="filled" severity="success">
                  خروج از حساب با موفقیت انجام شد
                </MuiAlert>
              </Snackbar>
            </Box>
          )}
        </Box>
      ) : (
        <Link to="/login">
          <MyButton
            borderradius={"1.8rem"}
            fontsize={"0.8rem"}
            padding={"0.75rem 1.5rem"}
          >
            ورود / ثبت نام
          </MyButton>
        </Link>
      )}
    </Box>
  );
}
