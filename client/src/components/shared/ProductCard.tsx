import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type TProduct = {
  _id: string;
  name: string;
  coverImage: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
};

type TProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: TProductCardProps) => {
  const { _id, name, coverImage, brand, quantity, price, rating } = product;
  return (
    <div className="border relative w-72 h-[350px] rounded-md group p-3 overflow-hidden hover:border-[#44ac69] space-y-1">
      <img
        src={coverImage}
        className="group-hover:scale-105 duration-300 w-full h-32 object-cover"
      />
      <h1 className="text-2xl pt-1">{name}</h1>
      <p className="text-md font-[500]">{brand} presents</p>
      <p className="text-xs font-semibold text-[#7A7A7A]">
        {quantity} products in stock
      </p>
      <div className="flex items-center justify-between">
        <p className="text-2xl">${price}</p>
        <p className="flex items-center gap-2">
          <FaStar fontSize={"1.5rem"} color="orange" />{" "}
          <span className="text-xl">{rating}</span>
        </p>
      </div>
      <Link to={`/products/${_id}`}>
        <button className="bg-[#44ac69] bottom-2 left-2 right-2 absolute px-2 rounded-md text-white py-2 flex items-center gap-2 font-semibold justify-center">
          See Details <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
