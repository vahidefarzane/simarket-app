import React from "react";
import {HotBtn} from "../../Style/styles"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function SearchBoxBtn(props) {
  
  return (
    <HotBtn variant="outlined" endIcon={<ChevronLeftIcon sx={{marginRight:'0.2rem'}} />}>
      {props.name}
    </HotBtn>
  );
}
