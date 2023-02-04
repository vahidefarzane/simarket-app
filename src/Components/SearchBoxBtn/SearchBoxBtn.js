import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function SearchBoxBtn(props) {
  const HotBtn = styled(Button)(({ theme }) => ({
    border: "1px solid #e2e2e2",
    borderRadius: "1.5rem",
    background: "transparent",
    marginLeft: "0.5rem",
    color: "#000",
    padding:'0.5rem 0.2rem',
    "&:hover": {
      background: "#ff6a00",
      color:'#fff',
      border:'1px solid #ff6a00'
    },
  }));
  return (
    <HotBtn variant="outlined" endIcon={<ChevronLeftIcon sx={{marginRight:'0.2rem'}} />}>
      {props.name}
    </HotBtn>
  );
}
