import { BsDiscord } from "react-icons/bs";
import { FaFacebook, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=abdullahalfahin183@gmail.com&su=Subject&body=Body`;

  return (
    <div className="max-w-[1200px] mx-auto">
      <hr className="my-10 dark:border-neutral-600" />
      <div className="flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center justify-around gap-5 text-zinc-600">
        <div className="w-[300px] dark:text-zinc-300 lg:text-start md:text-start text-center">
          <div className="lg:w-auto md:w-auto w-full flex items-center">
            <img
              src="https://i.ibb.co/7bKcJdH/download-removebg-preview-5.png"
              width={60}
              height={60}
              className="lg:m-0 md:m-0 mx-auto"
              alt="logo"
            />
            <h1 className="text-xl">KeyNest</h1>
          </div>
          <p className="text-md">
            KeyNest is an innovative keyboard e-commerce platform offering a
            curated selection of premium keyboards for enthusiasts and
            professionals.
          </p>
        </div>
        <div className="dark:text-zinc-300">
          <p className="text-3xl font-semibold dark:text-zinc-300">Pages</p>
          <div className="dark:text-zinc-300 flex items-center flex-col">
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:text-violet-500 hover:underline border-violet-500"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="dark:text-zinc-300 text-center">
          <p className="text-3xl pb-5 font-semibold">Important Links</p>
          <div className="text-zinc-600 flex items-center gap-6 pt-7 dark:text-zinc-500">
            <a target="_blank" rel="noopener noreferrer" href={mailtoLink}>
              <MdOutlineMailOutline
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abdullahal5"
            >
              <FaGithubAlt
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abdullah-al-fahim-7a5593286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FaLinkedinIn
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/abdullahal.fahim.9421"
            >
              <FaFacebook
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.com/users/fahim4026"
            >
              <BsDiscord
                fontSize={"1.7rem"}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:text-violet-500"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-5 dark:border-neutral-600" />
      <p className="text-center text-zinc-500 pb-5">
        ALL RIGHTS RESERVED @2024 BY FAHIM
      </p>
    </div>
  );
};

export default Footer;
