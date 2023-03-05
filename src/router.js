import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import ProductsList from "./Components/ProductsList/ProductsList";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductPage from "./Components/ProductPage/ProductPage";
import AddComment from "./Components/AddComment/AddComment";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Panel from "./Components/Panel/Panel";
import Addresses from "./Components/Panel/Addresses";
import Comments from "./Components/Panel/Comments";
import Dashboard from "./Components/Panel/Dashboard";
import Favarates from "./Components/Panel/Favarates";
import Notification from "./Components/Panel/Notification";
import Orders from "./Components/Panel/Orders";
import TrackingOrder from "./Components/Panel/TrackingOrder";
import AccountInfos from "./Components/Panel/AccountInfos";
import AddAddress from "./Components/Panel/AddAddress";
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
