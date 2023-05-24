import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import ProductsList from "./Pages/ProductsList/ProductsList";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProductPage from "./Components/ProductPage/ProductPage";
import AddComment from "./Pages/AddComment/AddComment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Panel from "./Pages/Panel/Panel";
import Addresses from "./Pages/Panel/Addresses";
import Comments from "./Pages/Panel/Comments";
import Dashboard from "./Pages/Panel/Dashboard";
import Favarates from "./Pages/Panel/Favarates";
import Notification from "./Pages/Panel/Notification";
import Orders from "./Pages/Panel/Orders";
import TrackingOrder from "./Pages/Panel/TrackingOrder";
import AccountInfos from "./Pages/Panel/AccountInfos";
import AddAddress from "./Pages/Panel/AddAddress";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/productsList", element: <ProductsList /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/products/:productid", element: <ProductPage /> },
  { path: "/products/:productid/addcomment", element: <AddComment /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  {
    path: "/panel/",
    element: <Panel />,
    children: [
      { path: "accountInfos", element: <AccountInfos /> },
      {
        path: "addresses/",
        element: <Addresses />,
      },
      { path: "addAddress", element: <AddAddress /> },
      { path: "comments", element: <Comments /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "favarates", element: <Favarates /> },
      { path: "notification", element: <Notification /> },
      { path: "orders", element: <Orders /> },
      { path: "trackingOrder", element: <TrackingOrder /> },
    ],
  },
];

export default routes;
