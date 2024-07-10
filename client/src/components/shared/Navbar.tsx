import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Dashbaord", href: "/dashboard" },
  ];
  return (
    <div className="bg-[#4c9c64] h-20 text-white">
      <div className="flex items-center justify-between h-full max-w-[1300px] mx-auto">
        <div>
          <h1 className="text-2xl">Logo</h1>
        </div>
        <div className="flex items-center gap-6">
          {links.map((item, index) => (
            <Link to={item.href} key={index}>
              <p className="font-semibold">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className=" hover:bg-black/20 rounded-full p-3 duration-300 cursor-pointer">
          <div className="relative">
            <MdShoppingCart fontSize={"1.5rem"} className="text-gray-800" />{" "}
            <span className="absolute -top-3 -right-4 text-xs leading-none rounded-full bg-white border text-black px-2 py-1">
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
