import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div className="main">
        {/* <NavBar /> */}
        {router}
        <Footer/>
      </div>
    </>
  );
}

export default App;
