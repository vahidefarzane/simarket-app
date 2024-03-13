import React from "react";
import { FormControl, InputLabel, Input } from "@mui/material";

export default function FormInput(props) {
  return (
    <>
      <FormControl variant="outlined" sx={{ marginBottom: "1.5rem" }}>
        <InputLabel
          sx={{
            "&.MuiInputLabel-outlined": {
              right: "1rem",
              top: "0",
              transformOrigin: "top right",
              fontSize: "0.9rem",
            },
            "&.Mui-focused": {
              right: "1rem",
            },
          }}
        >
          {props.lable}
        </InputLabel>
        <Input type={props.type} />
      </FormControl>
    </>
  );
}
