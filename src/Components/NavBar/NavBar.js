import { Box } from "@mui/material";

import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import "./NavBar.css"

export default function Navbar(props) {
  return (
    <Box>
      <DesktopNavBar isSticky={props.isSticky} />
      <MobileNavBar isSticky={props.isSticky} />
    </Box>
  );
}
