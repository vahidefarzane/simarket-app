import Home from "./Components/Home/Home"
import Categories from "./Components/Categories/Categories"
import ProductsList from "./Components/ProductsList/ProductsList"
import ContactUs from "./Components/ContactUs/ContactUs"
import ProductPage from "./Components/ProductPage/ProductPage"
import AddComment from "./Components/AddComment/AddComment"
import Login from "./Components/Login/Login"
import Register from "./Components/Resgister/Register"
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"
const routes = [
  { path: "/", element: <Home /> },
  { path: "/categories", element: <Categories /> },
  { path: "/productsList", element: <ProductsList /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/product", element: <ProductPage /> },
  { path: "/addComment", element: <AddComment /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
];

export default routes;
