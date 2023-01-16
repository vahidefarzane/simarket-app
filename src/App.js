import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import { Stack } from "@mui/system";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Stack className="main">
        <NavBar />
        {router}
        <Footer/>
      </Stack>
    </>
  );
}

export default App;
