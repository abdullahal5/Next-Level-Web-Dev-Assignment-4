import { FaArrowRight, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="border w-72 rounded-md group p-3 overflow-hidden hover:border-[#44ac69] space-y-1">
      <img
        src="https://i.ibb.co/HKNvh9L/download-removebg-preview-2.png"
        className="group-hover:scale-105 duration-300"
      />
      <h1 className="text-2xl pt-1 font-semibold">Dell Gaming keyboard</h1>
      <p className="text-md font-[500]">Apple presents</p>
      <p className="text-xs font-semibold text-[#7A7A7A]">
        12 products in stock
      </p>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">$343</p>
        <p className="flex items-center gap-2">
          <FaStar fontSize={"1.5rem"} color="orange" />{" "}
          <span className="text-xl">6.8</span>
        </p>
      </div>
      <button className="bg-[#44ac69] px-2 rounded-md w-full text-white py-2 flex items-center gap-2 font-semibold justify-center">
        See Details <FaArrowRight />
      </button>
    </div>
  );
};

export default ProductCard;
