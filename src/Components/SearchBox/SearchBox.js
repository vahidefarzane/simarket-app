import React from "react";
import { Box, InputBase, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SearchBoxBtn from "../SearchBoxBtn/SearchBoxBtn";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Search = styled(Box)(({ theme }) => ({
  display: "flex",
  borderRadius: "0.7rem",
  color: "#212121",
  backgroundColor: "transparent",
  border: "1px solid #e2e2e2",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0",
    height: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    margin: "0 2rem 0 1rem",
    width: "87%",
    padding: "0.15rem",
    fontSize: "0.9rem",
    height: "3rem",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: "0.2rem",
  width: "100%",
}));
const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  "&.MuiIconButton-root": {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
const SearchListBox = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid #e2e2e2",
  borderRadius: "0.6rem",
  width: "87%",
  zIndex: "10",
  background: "#fff",
  top: "0.7rem",
  right: "2rem",
  padding: "1.5rem 2rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export default function SearchBox() {
  const [showList, setShowList] = useState(false);
  const [hotBtns, setHotBtns] = useState([
    { id: 1, name: "گوشی و موبایل", link: "" },
    { id: 2, name: "آیفون", link: "" },
    { id: 3, name: "اپل واچ", link: "" },
    { id: 4, name: "ساعت مچی", link: "" },
  ]);

  const focusInputHandeler = () => {
    setShowList(true);
    console.log("f");
  };
  const searchHandeler = () => {
    console.log("s");
  };
  const blurInputHandler = () => {
    console.log("b");
    setShowList(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "2.9rem",
        width: {
          md: "45%",
          sm: "55%",
          xs: "70%",
        },
      }}
    >
      <Search>
        <IconButtonStyled onClick={searchHandeler}>
          <SearchIcon />
        </IconButtonStyled>
        <StyledInputBase
          placeholder="جستجو..."
          onFocus={focusInputHandeler}
          onBlur={blurInputHandler}
        />
      </Search>
      {showList && (
        <SearchListBox>
          <Box sx={{ display: "flex", marginBottom: "1rem" }}>
            <WhatshotIcon sx={{ marginLeft: "0.7rem" }} />
            <Typography>جستجوی پرطرفدار</Typography>
          </Box>
          {hotBtns.map((btn) => (
            <SearchBoxBtn key={btn.id} name={btn.name} />
          ))}
        </SearchListBox>
      )}
    </Box>
  );
}
