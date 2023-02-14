import { InputBase, Stack, Typography, InputLabel } from "@mui/material";
import React from "react";

export default function Input(props) {
  return (
    <Stack sx={{ width: props.width }}>
      <InputLabel htmlfor="my-input" sx={{ marginBottom: "0.7rem" }}>
        {props.lable}
      </InputLabel>
      <InputBase
        
        id="my-input"
        placeholder={props.placholder}
        sx={{
          border: "1px solid #B2B1B1",
          borderRadius: "0.6rem",
          padding: "0.4rem 0.7rem",
          fontSize: "0.9rem",
          marginBottom: "1.5rem" 
        }}
      >
        {props.children}
      </InputBase>
    </Stack>
  );
}
