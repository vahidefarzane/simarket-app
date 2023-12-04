import React, { useEffect, useState } from "react";
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
  ListItemButton,
  List,
} from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Product from "../../Components/Product/Product";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyButton from "../../Components/MyButton/MyButton";
import "./ProductsList.css";
import useAxios from "../../hooks/useAxios";
import Loading from "../../Components/Loading/Loading";
import {
  SideBarStyled,
  AccordionStyled,
  CustomSlider,
  H2ElemSideBar,
  ListItemButtonHeader,
} from "../../Style/styles";

const useStyles = makeStyles((theme) => ({
  productListContainer: {
    display: "flex",
    padding: "2rem",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
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
    [theme.breakpoints.between("md", "lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  productListHead: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #e4e4e4",
    padding: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
  },
  allProductsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));


export default function ProductsList() {
  const classes = useStyles();
  const {
    response: allProducts,
    setResponse: setAllProducts,
    loading: isPendingProducts,
  } = useAxios({
    method: "get",
    url: "/products",
  });
  const { response: categories, loading: isPendingCategories } = useAxios({
    method: "get",
    url: "/categories",
  });

  // ================> Filter by Category <================
  const [filterbycategory, setfilterbycategory] = useState(null);

  const checkboxHandler = (name, e) => {
    let checked = e.target.checked;
    // checked ? setCat((oldcat) => [...oldcat, name]) : <></>
    checked ? setfilterbycategory(name) : setfilterbycategory(null);
  };
  // ================> Filter by price <================

  const [newValue, setNewValue] = useState(1000000);
  const [value, setValue] = useState([100000, 1100000]);
  const handleChange = (event, newval) => {
    setValue(newval);
    setNewValue(newval[1] - newval[0]);
  };
  const filterProductPrice = () => {
    console.log(newValue);
  };

  // useEffect(() => {
  //   if (filterbycategory) {
  //     const { response : product } = useAxios({
  //       url: `/products?category=${filterbycategory}&price_gte=0&price_lte=${newValue}`,
  //     });
  //     const { response : product } = useAxios({
  //       url: `http://localhost:4000/products?category=${filterbycategory}&price_gte=0&price_lte=${newValue}`,
  //     });

  //   } else {
  //     axios
  //       .get(`http://localhost:4000/products?price_gte=0&price_lte=${newValue}`)
  //       .then((product) => {
  //         setAllProducts(product.data);
  //       });
  //   }
  // }, [newValue, filterbycategory]);

  const { response: sortByStars } = useAxios({
    url: "/products?_sort=rating.rate&_order=desc",
  });
  const { response: sortBySale } = useAxios({
    url: "/products?_sort=numbersale&_order=desc",
  });
  const { response: sortByPriceUp } = useAxios({
    url: "/products?_sort=price",
  });
  const { response: sortByPriceDown } = useAxios({
    url: "/products?_sort=price&_order=desc",
  });

  const sortByStartsHandeler = () => {
    setAllProducts(sortByStars);
  };
  const sortBySaleHandeler = () => {
    setAllProducts(sortBySale);
  };
  const sortByPriceUpHandeler = () => {
    setAllProducts(sortByPriceUp);
  };
  const sortByPriceDownHandeler = () => {
    setAllProducts(sortByPriceDown);
  };

  return (
    <Box className={classes.productListContainer}>
      <SideBarStyled>
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
              min={100000}
              max={1100000}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.7rem",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem" }}>
                {value[1] + "  تومان"}
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                {value[0] + "  تومان"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "0.6rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {newValue + "   تومان"}
            </Box>
            <MyButton widthupmd="100%" onClick={filterProductPrice}>
              صافی
            </MyButton>
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
            {isPendingCategories ? (
              <Loading />
            ) : (
              categories.map((category) => (
                <Box className={classes.categoryBox}>
                  <Checkbox
                    onChange={(e) => checkboxHandler(category.name, e)}
                  />
                  <Typography component="span">{category.name}</Typography>
                </Box>
              ))
            )}
          </AccordionDetails>
        </AccordionStyled>
      </SideBarStyled>
      <Stack className={classes.productListBox}>
        <Box className={classes.productListHead}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SortIcon
              sx={{
                fontSize: {
                  md: "2rem",
                  sm: "1.7rem",
                },
                marginLeft: "0.5rem",
                color: "#b5b2b2",
              }}
            />
            <Typography
              component={"h2"}
              sx={{
                fontSize: {
                  lg: "0.9rem",
                  // md: "0.8rem",
                  // sm: "0.8rem",
                  xs: "0.8rem",
                },
                marginLeft: {
                  md: "2rem",
                  sm: "1.7rem",
                },
                fontWeight: "600",
                color: "#4d4d4d",
              }}
            >
              مرتب سازی بر اساس:
            </Typography>
          </Box>

          <List sx={{ display: "flex", padding: "0", flexWrap: "wrap" }}>
            <Box>
              <ListItemButtonHeader>پیشفرض</ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader onClick={sortByStartsHandeler}>
                محبوب ترین
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader onClick={sortBySaleHandeler}>
                پر فروش ترین
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader onClick={sortByPriceUpHandeler}>
                ارزان ترین
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader onClick={sortByPriceDownHandeler}>
                گران ترین
              </ListItemButtonHeader>
            </Box>
          </List>
        </Box>
        <Box className={classes.allProductsList}>
          {isPendingProducts ? (
            <Loading />
          ) : (
            allProducts.map((product) => (
              <Product
                key={product.id}
                productImage={product.image}
                productTtile={product.title}
                productPrice={product.price}
                // productRate={product.rating.rate}
                ProductId={product.id}
                offer={product.off}
              />
            ))
          )}
        </Box>
      </Stack>
    </Box>
  );
}
