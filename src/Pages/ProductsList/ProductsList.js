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
import { Link, useSearchParams } from "react-router-dom";
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
  const [categories, errorCat, loadingCat, axiosFetchCat] = useAxios();
  const getCategories = () => {
    axiosFetchCat({
      method: "GET",
      url: "/categories",
    });
  };
  useEffect(() => {
    getCategories();
  }, []);

  const [
    productFiltered,
    productFilteredError,
    productFilteredLoading,
    axiosFetchfilter,
  ] = useAxios();
  // const [url, setURL] = useState("");
  const [categoryUrl, setCategoryUrl] = useState("");
  const [priceUrl, setPriceUrl] = useState("");
  const [sortUrl, seySortUrl] = useState("");
  const handelfilter = (e, propertyName, propertyValue) => {
    if (propertyName === "category") {
      let checked = e?.target?.checked;
      if (checked) {
        const newPath = `${propertyName}=${propertyValue}`;
        if (categoryUrl === "") {
          setCategoryUrl((prev) => {
            return prev + newPath;
          });
        } else {
          setCategoryUrl((prev) => {
            return prev + "&" + newPath;
          });
        }
      }
      if (!checked) {
        setCategoryUrl(() => {
          return categoryUrl.replace(`${propertyName}=${propertyValue}`, "");
        });
      }
    }
    if (propertyName === "price") {
      const newPath = `price_lte=${propertyValue[1]}&price_gte=${propertyValue[0]}`;
      setPriceUrl(newPath);
    }
    if (propertyName === "_sort") {
      const newPath = `_sort=${propertyValue}`;
      seySortUrl(newPath);
    }
  };
  useEffect(() => {
    axiosFetchfilter({
      method: "GET",
      url: `products?${categoryUrl}&${priceUrl}&${sortUrl}`,
    });
  }, [categoryUrl, priceUrl,sortUrl]);

  const [pricelimite, setPricelimite] = useState([100000, 1100000]);

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
              value={pricelimite}
              onChange={(e, newval) => {
                handelfilter(e, "price", newval);
                setPricelimite(newval);
              }}
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
                {pricelimite[1] + "  تومان"}
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                {pricelimite[0] + "  تومان"}
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
            ></Box>
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
            {loadingCat ? (
              <Loading />
            ) : (
              categories.map((category) => (
                <Box className={classes.categoryBox}>
                  <Checkbox
                    onChange={(e) => handelfilter(e, "category", category.name)}
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
              <ListItemButtonHeader
                onClick={(e) => handelfilter(e, "_sort", "")}
              >
                پیشفرض
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader
                onClick={(e) =>
                  handelfilter(e, "_sort", "rating.rate&_order=desc")
                }
              >
                محبوب ترین
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader
                onClick={(e) =>
                  handelfilter(e, "_sort", "numbersale&_order=desc")
                }
              >
                پر فروش ترین
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader
                onClick={(e) => handelfilter(e, "_sort", "price")}
              >
                ارزان ترین
              </ListItemButtonHeader>
            </Box>
            <Box>
              <ListItemButtonHeader
                onClick={(e) => handelfilter(e, "_sort", "price&_order=desc")}
              >
                گران ترین
              </ListItemButtonHeader>
            </Box>
          </List>
        </Box>
        <Box className={classes.allProductsList}>
          {productFilteredLoading ? (
            <Loading />
          ) : (
            productFiltered.map((product) => <Product product={product} />)
          )}
        </Box>
      </Stack>
    </Box>
  );
}
