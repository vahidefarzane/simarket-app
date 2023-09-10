import { React, useState } from "react";
import { Select, MenuItem, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function SelectBox(props) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", width: "49%" }}>
      <Typography
        sx={{
          marginBottom: "0.6rem",
          fontSize: {
            md: "0.9rem",
            xs: "0.8rem",
          },
          color: "#909090",
        }}
      >
        {props.name}
      </Typography>
      <Select
        sx={{
          borderRadius: "0.6rem",
          "& .MuiSvgIcon-root": {
            color: "#909090",
            right:'-9px',
            top:'0',
            position:'relative',
          },
         
        }}
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Stack>
  );
}
