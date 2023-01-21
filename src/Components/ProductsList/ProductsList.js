import axios from "axios";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Product from "../Product/Product";
import SortIcon from "@mui/icons-material/Sort";
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
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";

import "./ProductsList.css";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
  productListBox: {
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 3%)",
    border: "1px solid #e4e4e4",
    borderRadius: " 0.7rem",
    width: "77%",
  },
  productListHead: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #e4e4e4",
    padding: "0.5rem 1rem 1rem",
  },
  allProductsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));
const AccordionStyled = styled(Accordion)(({ theme }) => ({
  border: "1px solid  #e4e4e4",
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 3%)",
  borderRadius: "0.7rem",
  margin: "0.5rem 0",
  "&::before": {
    display: "none",
  },
  "&:first-of-type": {
    borderTopLeftRadius: "0.7rem",
    borderTopRightRadius: "0.7rem",
  },
  "&:last-of-type": {
    borderBottomLeftRadius: "0.7rem",
    borderBottomRightRadius: "0.7rem",
  },
  "&.Mui-expanded": {
    margin: "0.5rem 0",
  },
}));
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height:'2.5rem',
    fontSize: "0.8rem",
    marginLeft: "0.5rem",
    color: "#81858b",
  },
  
}));
const H2ElemSideBar = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: "600",
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root ": {
    fontSize: "0.9rem",
  },
}));
const ListItemButtonHeader = styled(ListItemButton)(({ theme }) => ({
  transition: "none",
  color: " #4d4d4d",
  marginLeft: "0.3rem",
  "&:hover": {
    background: "#ff6a00",
    color: "#fff",
    borderRadius: "0.7rem",
  },
  "&:focus": {
    background: "#ff6a00",
    color: "#fff",
    borderRadius: "0.7rem",
  },
}));
const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    backgroundColor: "#fff",
    border: "1px solid blue",
    width: "1.1rem",
    height: "1.1rem",
  },
  "& .MuiSlider-track": {
    height: "2px",
  },
}));
function valuetext(value) {
  return `${value}تومان`;
}

export default function ProductsList() {
  const [value, setValue] = useState([100, 900]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const [filteredList, setFilteredList] = useState([
    { id: 1, title: "پیشفرض" },
    { id: 2, title: "محبوب ترین" },
    { id: 3, title: "پربازدید ترین" },
    { id: 4, title: "ارزان ترین" },
    { id: 5, title: "گران ترین" },
  ]);
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
        <AccordionStyled defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <H2ElemSideBar component={"h2"}>فیلتر بر اساس قیمت :</H2ElemSideBar>
          </AccordionSummary>
          <AccordionDetails sx={{ margin: " 0 0.7rem" }}>
            <CustomSlider
              value={value}
              onChange={handleChange}
              getAriaValueText={valuetext}
              // valueLabelDisplay="on"
              min={100}
              max={900}
            />
            <Typography>{value}</Typography>
            <MyButton width="100%">صافی</MyButton>
          </AccordionDetails>
        </AccordionStyled>
        <AccordionStyled defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <H2ElemSideBar component={"h2"}>جستجو در محصولات :</H2ElemSideBar>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex",marginTop:"1rem" }}>
              <TextFieldStyled type="text" placeholder="جستجوی محصول ... " />
              <MyButton >ثبت</MyButton>
            </Box>
          </AccordionDetails>
        </AccordionStyled>
        <AccordionStyled defaultExpanded={true}>
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
      <Stack className={classes.productListBox}>
        <Box className={classes.productListHead}>
          <SortIcon
            sx={{ fontSize: "2rem", marginLeft: "0.5rem", color: "#b5b2b2" }}
          />
          <Typography
            component={"h2"}
            sx={{
              fontSize: " 0.9rem",
              marginLeft: "2rem",
              fontWeight: "600",
              color: "#4d4d4d",
            }}
          >
            مرتب سازی بر اساس:
          </Typography>
          <List sx={{ display: "flex", padding: "0" }}>
            {filteredList.map((listItem) => (
              <Link key={listItem.id}>
                <ListItem disablePadding>
                  <ListItemButtonHeader>
                    <ListItemTextStyled primary={listItem.title} />
                  </ListItemButtonHeader>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        <Box className={classes.allProductsList}>
          {ispending &&
            allProducts.map((product) => (
              <Product
                key={product.id}
                productImage={product.image}
                productTtile={product.title}
                productPrice={product.price}
              />
            ))}
        </Box>
      </Stack>
    </Box>
  );
}
