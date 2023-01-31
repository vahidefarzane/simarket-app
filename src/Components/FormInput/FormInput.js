import React from "react";
import { FormControl, InputLabel, Input } from "@mui/material";
import { styled } from "@mui/material/styles";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  "&.MuiInputLabel-outlined": {
    right: "1rem",
    top: "0",
    transformOrigin:'top right',
    fontSize:'0.9rem',
    
  },
  "&.Mui-focused": {
    right: "1rem",
  },
}));

export default function FormInput(props) {
  return (
    <FormControl variant="outlined" sx={{ marginBottom: "1.5rem" }}>
      <InputLabelStyled >{props.lable}</InputLabelStyled>
      <Input type={props.type}
       />
    </FormControl>
  );
}
