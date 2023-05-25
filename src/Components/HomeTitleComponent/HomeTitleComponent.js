import React from "react";
import { Box, Typography } from "@mui/material";

export default function HomeTitleComponent(props) {
  return (
    <Typography
      component={"h2"}
      sx={(theme) => ({
        color: `${props.color}`,
        margin: `${props.margin}`,
        fontWeight: "600",
        fontSize: " 1.5rem",
        padding: "1rem",
        "&:before": {
          display: "inline-block",
          content: '""',
          marginLeft: "0.8rem",
          verticalAlign: "middle",
          height: " 29px",
          width: "17px",
          backgroundColor: "#e2e2e2",
          borderTopRightRadius: "50rem",
          borderBottomRightRadius: "50rem",
        },

        [theme.breakpoints.down("md")]: {
          fontWeight: "600",
          fontSize: " 1.2rem",
          "&:before": {
            marginLeft: "0.6rem",
            height: " 25px",
            width: "15px",
          },
        },
        [theme.breakpoints.down("sm")]: {
          fontWeight: "600",
          fontSize: " 1rem",
          "&:before": {
            marginLeft: "0.6rem",
            height: " 23px",
            width: "13px",
          },
        },
      })}
    >
      {props.title}
    </Typography>
  );
}
