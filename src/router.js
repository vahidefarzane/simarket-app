import ProductsList from "./Pages/ProductsList/ProductsList";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProductPage from "./Pages/ProductPage/ProductPage";
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
import OrderInfo from "./Components/OrderInfo/OrderInfo";
import OrderReceived from "./Components/OrderReceived/OrderReceived";
import MainLayout from "./Layouts/main-layout";
import Home from "./Pages/Home/Home";

import { createBrowserRouter, Navigate } from "react-router-dom";
import { registerAction } from "./Pages/Register/Register";
import { loginAction } from "./Pages/Login/Login";

const token = localStorage.getItem("token");
const PrivateRoute = ({ children }) => {
  return token ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      { path: "/productsList", element: <ProductsList /> },
      { path: "/contactUs", element: <ContactUs /> },
      {
        path: "/products/:productid",
        element: (
          <PrivateRoute>
            <ProductPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:productid/addcomment",
        element: (
          <PrivateRoute>
            <AddComment />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
      {
        path: "/cart/",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        children: [
          { path: "orderInfo", element: <OrderInfo /> },
          { path: "checkout", element: <Checkout /> },
          { path: "orderReceived", element: <OrderReceived /> },
        ],
      },

      {
        path: "/panel/",
        element: (
          <PrivateRoute>
            <Panel />
          </PrivateRoute>
        ),

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
    ],
  },
]);

export default router;
