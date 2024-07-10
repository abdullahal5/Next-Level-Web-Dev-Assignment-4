import ProductCard from "../shared/ProductCard";
import { FaRegKeyboard } from "react-icons/fa6";

const FeaturedCard = () => {
  return (
    <div>
      <h1 className="text-3xl text-center pb-7 font-semibold flex items-center justify-center gap-2">
        Our Latest Keyboards <FaRegKeyboard />
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
