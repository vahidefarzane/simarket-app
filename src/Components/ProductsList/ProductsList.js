import axios from "axios";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Product from "../Product/Product";
import { BiSortDown } from "react-icons/bi";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyButton from "../MyButton/MyButton";
import {
  Stack,
  Slider,
  Box,
  Typography,
  TextField,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import "./ProductsList.css";

const useStyles = makeStyles((theme) => ({
  productListContainer: {
    display: "flex",
    padding: "2rem",
    justifyContent: "space-between",
  },
  productListSidebar: {
    width: "22%",
  },
  categoryBox: {
    display: "flex",
    alignItems: "center",
  },
}));
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  borderRadius: "0.6rem",
  fontSize: "0.3rem",
  marginLeft: "0.7rem",
  background: "#e3e3e6",
  color: "#81858b",
  [theme.breakpoints.down("md")]: {
    width: " 70%",
  },
  [theme.breakpoints.up("md")]: {
    width: " 100%",
  },
}));
const H2ElemSideBar = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: "600",
}));
const AccordionStyled = styled(Accordion)(({ theme }) => ({
  "& .MuiPaper-root": {
    boxShadow: "none",
    borderRadius: "0",
  },
}));

export default function ProductsList() {
  const classes = useStyles();
  const [categories, setAllcategories] = useState("");
  const [categoriesIsPending, setCategoriesIsPending] = useState(false);
  const { allProducts, ispending } = useFetch(
    "https://fakestoreapi.com/products"
  );
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((category) => {
        console.log(category.data);
        setAllcategories(category.data);
        setCategoriesIsPending(true);
      });
  }, []);

  return (
    <Box className={classes.productListContainer}>
      <Stack className={classes.productListSidebar}>
        <AccordionStyled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <H2ElemSideBar component={"h2"}>فیلتر بر اساس قیمت :</H2ElemSideBar>
          </AccordionSummary>
          <AccordionDetails>
            <Slider aria-label="Volume" />
            <MyButton>صافی</MyButton>
          </AccordionDetails>
        </AccordionStyled>
        <AccordionStyled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <H2ElemSideBar component={"h2"}>جستجو در محصولات :</H2ElemSideBar>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex" }}>
              <TextFieldStyled type="email" placeholder="جستجوی محصول ... " />
              <MyButton borderradius="0.6rem">ثبت</MyButton>
            </Box>
          </AccordionDetails>
        </AccordionStyled>
        <AccordionStyled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <H2ElemSideBar component={"h2"}>
              فیلتر بر اساس دسته بندی :
            </H2ElemSideBar>
          </AccordionSummary>
          <AccordionDetails>
            {categoriesIsPending &&
              categories.map((category) => (
                <Box className={classes.categoryBox}>
                  <Checkbox />
                  <Typography component={"span"}>{category}</Typography>
                </Box>
              ))}
          </AccordionDetails>
        </AccordionStyled>
      </Stack>
      <div className="product-lisBbox">
        <div className="product-list-head">
          <BiSortDown className="sort-icon-haed" />
          <h2>مرتب سازی بر اساس: </h2>
          <ul className="product-filtered-head-title">
            <li>پیشفرض</li>
            <li>محبوب ترین</li>
            <li>پر بازدید ترین</li>
            <li>ارزان ترین</li>
            <li>گران ترین</li>
          </ul>
        </div>
        <div className="all-products-list">
          {ispending &&
            allProducts.map((product) => (
              <Product
                className="product-wrapper"
                key={product.id}
                productImage={product.image}
                productTtile={product.title}
                productPrice={product.price}
              />
            ))}
        </div>
      </div>
    </Box>
  );
}
