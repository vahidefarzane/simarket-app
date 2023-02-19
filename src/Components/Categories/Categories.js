import React, { useState } from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiEarrings } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import "./Categories.css";
import { Link } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeTitleComponent from "../HomeTitleComponent/HomeTitleComponent";
import useFetch from "../../hooks/useFetch";

const useStyles = makeStyles((theme) => ({
  categoriesWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: "2rem",
  },

  categoryWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5rem 0",
    [theme.breakpoints.down("md")]: {
      margin: "0.7rem",
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      margin: "0.5rem",
      padding: "0.2rem",
    },
  },
  category: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "23%",
    borderRadius: "3rem",
    padding: "1.5rem",
    margin: "1rem",
    color: "black",
    border: "2px solid #e2e2e2",
    transition: "border 1s",
    "&:hover": {
      border: " 2px solid var(--main)",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0.1rem",
      padding: "0.6rem",
      borderRadius: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      width: "48%",
      margin: "0.1rem",
      padding: "0.5rem",
      borderRadius: "1.3rem",
    },
  },
  categoryIcon: {
    width: "6rem",
    [theme.breakpoints.between("sm","md")]: {
      width: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "4rem",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
  categoryName: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginTop: " 1rem",
    [theme.breakpoints.between("sm","md")]: {
      fontSize: "0.8rem",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      marginTop: "0",
    },
  },
}));

export default function Categories() {
  const classes = useStyles();
  const { categories, categoriesIsPenging } = useFetch(
    "http://localhost:4000/categories"
  );

  return (
    <Stack className={classes.categoriesWrapper}>
      <HomeTitleComponent title="دسته بندی ها" />
      <Box className={classes.categoryWrapper}>
        {categoriesIsPenging &&
          categories.map((category) => (
            <Box key={category.id} className={classes.category}>
              <Box
                component="img"
                src={category.image}
                className={classes.categoryIcon}
              />
              <Stack className={classes.categoryName}>{category.name}</Stack>
            </Box>
          ))}
      </Box>
    </Stack>
  );
}
