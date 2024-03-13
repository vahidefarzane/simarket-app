import { InputBase, Stack, Typography, InputLabel } from "@mui/material";
import React from "react";

export default function Input(props) {
  return (
    <Stack sx={{ width: props.width }}>
      <InputLabel
        htmlfor="my-input"
        sx={{
          marginBottom: "0.7rem",
          fontSize: {
            md: "0.9rem",
            xs: "0.8rem",
          },
          // "&::before": {
          //   width: "1rem",
          //   height:'1rem',
          //   content:"''",
          //   borderRadius:'50%',
          //   backgroundColor:'red',

          // },
        }}
      >
        {props.lable}
      </InputLabel>
      <InputBase
        id="my-input"
        placeholder={props.placholder}
        sx={{
          border: "1px solid #B2B1B1",
          borderRadius: "0.6rem",
          padding: {
            md: "0.5rem",
            xs: "0.4rem",
          },
          fontSize: {
            md: "0.9rem",
            xs: "0.8rem",
          },
          marginBottom: {
            md: "1.5rem",
            xs: "1rem",
          },
        }}
      >
        {props.children}
      </InputBase>
    </Stack>
  );
}
