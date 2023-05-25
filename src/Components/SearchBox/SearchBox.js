import React, { useEffect } from "react";
import {
  Box,
  InputBase,
  IconButton,
  List,
  ListItemText,
  Typography,
  ListItem,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SearchBoxBtn from "../SearchBoxBtn/SearchBoxBtn";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
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
  padding: "0.2rem 1rem 0.2rem 0.2rem",
  width: "100%",
  fontSize: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.9rem",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const SearchListBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  border: "1px solid #e2e2e2",
  borderRadius: "0.6rem",
  width: "38%",
  height: "21.5rem",
  zIndex: "100",
  background: "#fff",
  top: "4rem",
  right: "11.5rem",
  padding: "1rem",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    right: "0",
    top: "7rem",
    padding: "0.5rem 0.6rem",
  },
}));
export default function SearchBox() {
  const [showList, setShowList] = useState(false);
  const [productsSearch, setProductsSearch] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const productvalue = (e) => {
    setShowList(true);
    setSearchValue(e.target.value);
    axios
      .get(`http://localhost:4000/products?q=${searchValue}`)
      .then((products) => {
        setProductsSearch(products.data);
      });
  };
  useEffect(() => {
    
  }, [productsSearch]);
  const clearInputSearch = () => {
    setSearchValue("");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "2.9rem",
        width: {
          md: "45%",
          xs: "70%",
        },
      }}
    >
      <Search>
        <StyledInputBase
          placeholder="جستجو..."
          onChange={productvalue}
          value={searchValue}
        />
        {searchValue && (
          <CloseIcon
            onClick={clearInputSearch}
            sx={{ color: "#212121", marginLeft: "0.4rem", cursor: "pointer" }}
          />
        )}
      </Search>
      {showList && (
        <SearchListBox>
          {productsSearch &&
            productsSearch.map((productSearch) => (
              <>
                <Link
                  to={`products/${productSearch.id}`}
                  key={productSearch.id}
                >
                  <Typography
                    onClick={() => {
                      setShowList(false);
                      setSearchValue(productSearch.title);
                    }}
                    sx={{
                      color: "#000",
                      fontSize: "0.9rem",
                      padding: "0.4rem 0",
                    }}
                  >
                    {productSearch.title}
                  </Typography>
                </Link>
                <Divider />
              </>
            ))}
        </SearchListBox>
      )}
    </Box>
  );
}
