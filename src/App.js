import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Stack } from "@mui/material";
import routes from "./router";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./Contexts/CartContext";
import "./App.css";


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
  const router = useRoutes(routes);

  return (
    <CartProvider>
      <Stack className="main">
        <NavBar isSticky={isSticky} />
        {router}
        <Footer />
      </Stack>
    </CartProvider>
  );
}

export default App;
