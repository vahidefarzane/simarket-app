import React, { useState } from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiEarrings } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import "./Categories.css";
import { Link } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  categoriesWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  categoriesTitle: {
    fontWeight: "700",
    fontSize: " 1.3rem",
  },
  categoryWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    padding: "2rem",
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
      margin: "0.2rem",
      padding: "1rem",
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
    fontSize: "5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginLeft: "1rem",
    },
  },
  categoryName: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: " 1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      marginTop: " 0",
    },
    
  },
}));

export default function Categories() {
  const classes = useStyles();
  const [categories, setCategories] = useState([
    { id: 1, icon: <AiOutlineLaptop />, name: "الکترونیک" },
    { id: 2, icon: <GiEarrings />, name: "زیور آلات" },
    { id: 3, icon: <GiAmpleDress />, name: "لباس زنانه" },
    { id: 4, icon: <FaUserTie />, name: "لباس مردانه" },
  ]);
  return (
    <Stack className={classes.categoriesWrapper}>
      <Typography component={"h1"} className={classes.categoriesTitle}>
        دسته بندی ها
      </Typography>
      <Box className={classes.categoryWrapper}>
        {categories.map((category) => (
          <Box key={category.id} className={classes.category}>
            <Stack className={classes.categoryIcon}>{category.icon}</Stack>
            <Stack className={classes.categoryName}>{category.name}</Stack>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
