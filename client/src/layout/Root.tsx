import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1250px] mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
