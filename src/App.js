import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";

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
  return (
    <>
      <Stack className="main">
        <NavBar isSticky={isSticky} />
        {router}
        <Footer />
      </Stack>
    </>
  );
}

export default App;
