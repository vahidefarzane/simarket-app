import { React, useState, useEffect } from "react";
import { Box, Typography, Slider } from "@mui/material";

export default function CommentSlider(props) {
  const [satisfactionValue, setSatisfactionValue] = useState(50);
  const [satisfactionName, setSatisfactionName] = useState("نسبتا خوب");

  const SliderName = () => {
    switch (satisfactionValue) {
      case 0:
        setSatisfactionName("خیلی بد");
        break;
      case 25:
        setSatisfactionName("بد");
        break;
      case 50:
        setSatisfactionName("نسبتا خوب");
        break;
      case 75:
        setSatisfactionName("خوب");
        break;
      case 100:
        setSatisfactionName("عالی");
        break;
    }
  };
  const sliderChanged = (event) => {
    setSatisfactionValue(event.target.value);
  };
  useEffect(() => {
    SliderName();
  }, [satisfactionValue]);

  return (
    <Box
      sx={{
        width: {
          lg: "23rem",
          md: "21rem",
          xs: "23rem",
        },
        margin: {
          lg: "0 0 0.8rem 2rem",
          md: "0 0 0.8rem 1.5rem",
          xs: "0 0 0.8rem 1rem",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            md: "1rem",
            xs: "0.9rem",
          },
          color: "#737373",
        }}
      >
        {props.title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Slider
          sx={(theme) => ({
            color: "#ff6a00",

            [theme.breakpoints.up("md")]: {
              width: "17rem",
            },
            [theme.breakpoints.between("sm", "md")]: {
              width: "16rem",
            },
            [theme.breakpoints.down("sm")]: {
              width: "15rem",
            },
          })}
          aria-label="Temperature"
          step={25}
          value={satisfactionValue}
          onChange={(event) => sliderChanged(event)}
        />
        <Typography
          sx={{
            marginRight: "1rem",
            fontSize: {
              md: "0.9rem",
              xs: "0.8rem",
            },
            color: "#737373",
          }}
        >
          {satisfactionName}
        </Typography>
      </Box>
    </Box>
  );
}
