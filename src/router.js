import Home from "./Components/Home/Home"
import Categories from "./Components/Categories/Categories"
import ProductsList from "./Components/ProductsList/ProductsList"
import ContactUs from "./Components/ContactUs/ContactUs"
const routes = [
  { path: "/", element: <Home /> },
  { path: "/categories", element: <Categories /> },
  { path: "/productsList", element: <ProductsList /> },
  { path: "/contactUs", element: <ContactUs /> },
];

export default routes;
