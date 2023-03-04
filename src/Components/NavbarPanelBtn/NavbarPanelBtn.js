import { React, useState, useRef, useEffect } from "react";
import { Button, Box, Typography, Divider, Icon } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import "./NavbarPanelBtn.css";

export default function NavbarPanelBtn() {
  const [showLists, setShowLists] = useState(false);
  const openItemsPanel = () => {
    if (showLists) {
      setShowLists(false);
    } else {
      setShowLists(true);
    }
  };

  const [list, setList] = useState([
    { id: 1, name: "پیشخوان", icon: <AccountCircleOutlinedIcon /> },
    { id: 2, name: "سفارش ها", icon: <ListAltOutlinedIcon /> },
    { id: 3, name: "علاقه مندی ها", icon: <FavoriteBorderOutlinedIcon /> },
    { id: 4, name: "خروج از سیستم", icon: <LogoutOutlinedIcon /> },
  ]);

  const userName = localStorage.getItem("username");

  const clickHandeler = () => {
    setShowLists(false);
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
            </Box>
          )}
        </Box>
      ) : (
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
      )}
    </Box>
  );
}
