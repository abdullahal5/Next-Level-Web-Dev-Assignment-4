import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import Rating from "../../components/Rating";
import { useGetSingleProductsQuery } from "../../reudux/features/product/productApi";
import { useAppDispatch } from "../../reudux/hooks";
import { addProductItem } from "../../reudux/features/cart/cartSlice";

interface Product {
  _id: string;
  name: string;
  coverImage: string;
  rating: number;
  quantity: number;
  price: number;
  brand: string;
  orderQuantity?: number;
  orderPrice?: number;
}

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductsQuery(id);

  useEffect(() => {
    if (data) {
      setProduct(data?.data);
    }
  }, [data]);

  const dispatch = useAppDispatch();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-start gap-10 lg:flex-row md:flex-row flex-col my-16 border rounded-lg p-4 mx-4">
            <div className="lg:w-[30%] md:w-[30%]">
              {product && (
                <img
                  className="w-96 h-80 object-cover rounded-lg"
                  src={product.coverImage}
                  alt={product.name}
                />
              )}
            </div>
            <div className="flex-1">
              {product && (
                <>
                  <h1 className="text-3xl font-semibold">{product.name}</h1>
                  <p className="text-md font-[500] text-gray-500">
                    {product.brand} presents
                  </p>
                  <div className="pt-3">
                    Price:{" "}
                    <span className="text-lg text-[#4ca463]">
                      ${product.price}
                    </span>
                    <p className="">{product.quantity} products in stock</p>
                    <div className="pt-3">
                      <Rating rating={product.rating} />
                    </div>
                    <p className="text-sm pt-1 text-gray-500">
                      KeyNest's mechanical keyboards offer unparalleled
                      precision and comfort, featuring customizable RGB lighting
                      and responsive mechanical switches. Crafted for both
                      gaming enthusiasts and productivity mavens, each keyboard
                      blends ergonomic design with durable construction,
                      ensuring a superior typing experience and aesthetic
                      appeal. Discover a new realm of performance with KeyNest's
                      innovative keyboard lineup.
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(addProductItem(product))}
                    className="mt-3 px-4 py-2 rounded-md bg-[#4ca463] text-white font-semibold"
                  >
                    Add To Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
