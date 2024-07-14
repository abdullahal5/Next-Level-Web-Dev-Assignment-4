import { Link, useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../reudux/hooks";
import { RootState } from "../../reudux/store";

const Navbar = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="bg-[#4c9c64] h-20 text-white lg:block md:block hidden">
        <div className="flex items-center justify-between h-full max-w-[1300px] mx-auto lg:px-0 px-5">
          <Link to={"/"} className="flex items-center">
            <img
              src="https://i.ibb.co/7bKcJdH/download-removebg-preview-5.png"
              alt=""
              className="w-20"
            />
            <h1 className="text-2xl">KeyNest</h1>
          </Link>
          <div className="lg:flex md:flex hidden items-center gap-6">
            {links.map((item, index) => (
              <Link to={item.href} key={index}>
                <p className="font-semibold">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="hover:bg-black/20 rounded-full p-3 duration-300 cursor-pointer">
            <Link to={"/cart"}>
              <div className="relative">
                <MdShoppingCart fontSize={"1.5rem"} className="text-gray-800" />
                <span className="absolute -top-3 -right-4 text-xs leading-none rounded-full bg-white border text-black px-2 py-1">
                  {cart?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <nav className="border-gray-200 lg:hidden md:hidden block bg-[#4c9c64] text-white dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img
              src="https://i.ibb.co/7bKcJdH/download-removebg-preview-5.png"
              alt=""
              className="w-20"
            />
            <h1 className="text-2xl">KeyNest</h1>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <li className="bg-gray-50 rounded-lg">
              <Link
                to={"/cart"}
                className="block font-semibold px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Cart
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
