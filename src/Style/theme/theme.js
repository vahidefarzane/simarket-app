import { createTheme } from "@mui/material/styles";

const Colors = {
  main: "#fb4707",
  iconColor: "#212121",
  border: "#e2e2e2",
};

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "vazir",
    },
  },
  palette: {
    primary: {
      main: Colors.main,
    },
    secondary: {
      main: Colors.iconColor,
    },
    border: {
      main: Colors.border,
    },
  },
});
