import React from "react";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ProgressContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      marginBottom: "1rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginBottom: "1rem",
    },
  },
  ProgressTitleValue: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      width: "14rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "15rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "0.4rem",
    },
  },
  ProgressBar: {
    [theme.breakpoints.up("lg")]: {
      width: "20rem",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "15.5rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "23rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const LinearProgressStyled = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  display: "flex",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#ebebeb",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ff6a00",
  },
}));

export default function ProductCommentProgressBar(props) {
  const classes = useStyles();

  const { id, title, value } = props;
  return (
    <Box className={classes.ProgressContainer}>
      <Box className={classes.ProgressTitleValue}>
        <Typography
          component={"h4"}
          sx={{
            fontSize: {
              lg: "0.9rem",
              md: "0.8rem",
              xs: "0.8rem",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          component={"h4"}
          sx={{
            fontSize: {
              lg: "0.9rem",
              md: "0.8rem",
              xs: "0.8rem",
            },
            marginLeft: "0.5rem",
          }}
        >
          {value}%
        </Typography>
      </Box>
      <Box className={classes.ProgressBar} sx={{}}>
        <LinearProgressStyled variant="determinate" value={value} />
      </Box>
    </Box>
  );
}
