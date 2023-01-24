import Home from "./Components/Home/Home"
import Categories from "./Components/Categories/Categories"
import ProductsList from "./Components/ProductsList/ProductsList"
import ContactUs from "./Components/ContactUs/ContactUs"
import ProductPage from "./Components/ProductPage/ProductPage"
import AddComment from "./Components/AddComment/AddComment"
const routes = [
  { path: "/", element: <Home /> },
  { path: "/categories", element: <Categories /> },
  { path: "/productsList", element: <ProductsList /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/addComment", element: <AddComment /> },
];

export default routes;
