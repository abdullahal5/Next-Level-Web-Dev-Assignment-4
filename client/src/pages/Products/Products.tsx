/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from "react";
import Loading from "../../components/Loading";
import ProductCard from "../../components/shared/ProductCard";
import { useGetAllProductsQuery } from "../../reudux/features/product/productApi";

type TProduct = {
  _id: string;
  name: string;
  coverImage: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
};

const debounce = (func: any, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Products = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<string>("");
  const { data, isLoading } = useGetAllProductsQuery({
    search: searchValue,
    priceValue: priceValue,
  });

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchValue(value);
    }, 500),
    []
  );

  const handleGetSearchValue = (value: string) => {
    debouncedSearch(value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPriceValue = e.target.value;
    setPriceValue(selectedPriceValue);

    // Perform the query with the updated price sorting value
    // This depends on your useGetAllProductsQuery hook implementation
    // Ensure it supports dynamically changing priceValue to trigger a refetch
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-center lg:text-3xl md:text-3xl lg:mx-36 md:mx-20 mx-5 pt-5 font-semibold">
            Explore our latest collection of premium keyboards designed for
            superior performance and style
          </h1>
          <p className="text-center py-5 text-lg">
            {data?.data?.length} result found
          </p>
          <div className="mb-10 flex items-start gap-5">
            <div className="w-80 p-4 border rounded-lg h-auto lg:block md:hidden hidden">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl text-center ">Filter</h1>
                <button
                  type="reset"
                  className="bg-gray-100 px-2 py-1 border rounded-lg cursor-pointer text-sm"
                >
                  Clear
                </button>
              </div>
              <hr className="mt-5" />
              <div className="relative pt-5">
                <form className="text-center">
                  <input
                    type="text"
                    className="mx-auto w-full border outline-none py-3 rounded-xl px-4 border-[#4c9c64]"
                    placeholder="Search product here..."
                    name="search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleGetSearchValue(e.target.value)
                    }
                    required
                  />
                </form>
              </div>
              <div>
                <h1 className="text-2xl py-4">Desired Stipend ($)</h1>
                <input
                  type="range"
                  className="w-full"
                  min={0}
                  id="stipend"
                  max={10000}
                />
                <div className="flex justify-between mt-1 text-gray-600">
                  <span>$0</span>
                  <span>$2k</span>
                  <span>$4k</span>
                  <span>$6k</span>
                  <span>$8k</span>
                  <span>$10k</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl py-3">Sort products by price</h1>
                <form>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="priceLowToHigh"
                      name="price-sort"
                      onChange={handleSortChange}
                    />{" "}
                    Low to High
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="priceHighToLow"
                      name="price-sort"
                      onChange={handleSortChange}
                    />{" "}
                    High to Low
                  </label>
                </form>
              </div>
            </div>
            <div className="flex-1 rounded-lg h-auto">
              <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                  {data && data.data.length <= 0 ? (
                    <p className="flex items-center justify-center h-screen col-span-3">
                      No Results Found
                    </p>
                  ) : (
                    <>
                      {data?.data?.map((product: TProduct) => (
                        <div key={product._id}>
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
