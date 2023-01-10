import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./custom.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'vazir',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>
);
