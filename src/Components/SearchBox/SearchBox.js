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
import { Link } from "react-router-dom";
import axios from "axios";

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
  padding: "0.2rem 1rem",
  width: "100%",
}));

const SearchListBox = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid #e2e2e2",
  borderRadius: "0.6rem",
  width: "87%",
  height: "20rem",
  zIndex: "100",
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
  useEffect(() => {}, [productsSearch]);
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
        <StyledInputBase
          placeholder="جستجو..."
          onChange={productvalue}
          value={searchValue}
        />
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
                      setShowList(false)
                      setSearchValue(productSearch.title)

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
