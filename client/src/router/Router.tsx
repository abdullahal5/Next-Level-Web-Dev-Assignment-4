import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDetails from "../pages/Details/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ErrorPage from "../pages/ErrorPage";
import Checkout from "../pages/Checkout/Checkout";
import CashOnDelivery from "../pages/payment/cashondelivery/CashOnDelivery";
import Stripe from "../pages/payment/stripe/Stripe";
import Success from "../pages/success/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "checkout/cashondelivery",
        element: <CashOnDelivery />,
      },
      {
        path: "checkout/stripe",
        element: <Stripe />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);

export default router;
