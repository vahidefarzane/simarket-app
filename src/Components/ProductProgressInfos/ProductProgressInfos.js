import React from "react";
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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
  const { id, title, value } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "13rem",
        }}
      >
        <Typography component={"h4"}>{title}</Typography>
        <Typography component={"h4"}>{value}</Typography>
      </Box>
      <Box sx={{ width: "20rem" }}>
        <LinearProgressStyled variant="determinate" value={value} />
      </Box>
    </Box>
  );
}
