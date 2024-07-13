// import ProductCard from "../shared/ProductCard";
import { FaRegKeyboard } from "react-icons/fa6";
import { useGetAllProductsQuery } from "../../reudux/features/product/productApi";
import ProductCard from "../shared/ProductCard";
import Loading from "../Loading";

type TProduct = {
  _id: string;
  name: string;
  coverImage: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
};

const FeaturedCard = () => {
  const { data, isLoading } = useGetAllProductsQuery({});

  return (
    <div>
      <h1 className="text-3xl text-center pb-7 font-semibold flex items-center justify-center gap-2">
        Our Latest Keyboards <FaRegKeyboard />
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {data.data.length <= 0 ? (
                <p className="flex items-center justify-center h-screen col-span-3">
                  No Results Found
                </p>
              ) : (
                <>
                  {data?.data?.slice(0, 6).map((product: TProduct) => (
                    <div key={product._id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
