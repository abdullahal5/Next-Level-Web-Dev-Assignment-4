import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useAppSelector } from "../reudux/hooks";
import { RootState } from "../reudux/store";

const Root = () => {
  const cart = useAppSelector((state: RootState) => state.cart);

  window.onbeforeunload = function (event) {
    if (cart.length > 0) {
      event.preventDefault();
      event.returnValue = "";
      return "Are you sure you want to refresh? Your cart data will be lost.";
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[1250px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
