import React, { useEffect, useState } from "react";
import { Box, InputBase, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import {Search,StyledInputBase,SearchListBox} from "../../Style/styles"


export default function SearchBox() {
  const [showList, setShowList] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const { response: productsSearch } = useAxios({
    method:'get',
    url: `/products?q=${searchValue}`,
  });

  const productvalue = (e) => {
    setShowList(true);
    setSearchValue(e.target.value);
  };
  useEffect(() => {}, [searchValue]);
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
          {productsSearch?.map((productSearch) => (
            <>
              <Link to={`products/${productSearch.id}`} key={productSearch.id}>
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
