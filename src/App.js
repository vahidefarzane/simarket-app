import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./Contexts/CartContext";
import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
