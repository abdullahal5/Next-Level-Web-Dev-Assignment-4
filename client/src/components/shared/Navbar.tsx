import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { RootState } from "../../reudux/store";
import { useAppSelector } from "../../reudux/hooks";

const Navbar = () => {
const  cart  = useAppSelector((state: RootState) => state.cart);

  const links = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Dashbaord", href: "/dashboard" },
  ];
  return (
    <div className="bg-[#4c9c64] h-20 text-white">
      <div className="flex items-center justify-between h-full max-w-[1300px] mx-auto lg:px-0 px-5">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/7bKcJdH/download-removebg-preview-5.png"
            alt=""
            className="w-20"
          />
          <h1 className="text-2xl">KeyNest</h1>
        </div>
        <div className="lg:flex md:flex hidden items-center gap-6">
          {links.map((item, index) => (
            <Link to={item.href} key={index}>
              <p className="font-semibold">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className=" hover:bg-black/20 rounded-full p-3 duration-300 cursor-pointer">
          <Link to={'/cart'}>
            <div className="relative">
              <MdShoppingCart fontSize={"1.5rem"} className="text-gray-800" />{" "}
              <span className="absolute -top-3 -right-4 text-xs leading-none rounded-full bg-white border text-black px-2 py-1">
                {cart?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
