import { React, useState } from "react";
import { Select, MenuItem, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function SelectBox(props) {
  const [age, setAge] = useState("dfghjk");

  const SelectStyled = styled(Select)(({ theme }) => ({
    "& .MuiSelect-select": {
      padding: "0.7rem",
      borderColor: "#B2B1B1",
      "&:focus": {
        border: "transparent",
      },
    },
   
    borderRadius: "0.6rem",
  }));

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack sx={{display:'flex',flexDirection:'column',width:'49%'}}>
      <Typography sx={{marginBottom:'0.6rem'}}>نام</Typography>
      <SelectStyled value={age} onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </SelectStyled>
    </Stack>
  );
}
