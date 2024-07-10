import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Root = () => {
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
