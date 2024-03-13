import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function UnhandledException() {
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
        <ErrorOutlineIcon sx={{ fontSize: "4rem" }} />

        <Typography>خطا سرور</Typography>
      </Box>
    </Box>
  );
}

export default UnhandledException;
