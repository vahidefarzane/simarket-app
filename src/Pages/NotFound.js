import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fb4707",
        height: "20rem",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <SearchIcon sx={{ fontSize: "4rem" }} />
        <Typography>صفحه مورد نظر یافت نشد.</Typography>
        <Link to="/">
          <CustomButton margintop="1rem">صفحه اصلی</CustomButton>
        </Link>
      </Box>
    </Box>
  );
}

export default NotFound;
