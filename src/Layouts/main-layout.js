import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/NavBar";

function mainLayout() {
  return (
    <main className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default mainLayout;
