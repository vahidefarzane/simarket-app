import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Stack } from "@mui/material";
import routes from "./router";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import productsContext from "./Contexts/ProductsContext";
import "./App.css";

function App() {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop > 150) {
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
  
  const [userCart, setUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



  return (
    <>
     <productsContext.Provider
        value={{
          userCart,
          setUserCart,
          totalPrice,
          setTotalPrice,
        }}
        >
      <Stack className="main">
        <NavBar isSticky={isSticky} />
        {router}
        <Footer />
      </Stack>
      </productsContext.Provider>
    
    </>
  );
}

export default App;
