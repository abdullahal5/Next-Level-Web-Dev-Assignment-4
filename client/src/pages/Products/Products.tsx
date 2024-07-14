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
  const [sort, setSort] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { data, isLoading } = useGetAllProductsQuery({
    search: searchValue,
    sort: sort,
    price: price.toString(),
  });

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchValue(value);
    }, 500),
    []
  );

  const handleGetSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPriceValue = e.target.value;
    setSort(selectedPriceValue);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPrice = e.target.value;
    setPrice(parseInt(selectedPrice));
  };

  const handleClearFilters = () => {
    setSearchValue("");
    setSort("");
    setPrice(0);
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
          <div className="mb-10 flex lg:flex-row md:flex-col flex-col justify-center items-start gap-5">
            <div className="w-80 mx-auto p-4 border rounded-lg h-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl text-center ">Filter</h1>
                <button
                  type="reset"
                  onClick={handleClearFilters}
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
                      handleGetSearchValue(e)
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
                  onChange={handlePriceChange}
                  value={price}
                  max={200}
                />
                <div className="flex justify-between mt-1 text-gray-600">
                  <span>$0</span>
                  <span>$10</span>
                  <span>$50</span>
                  <span>$80</span>
                  <span>$120</span>
                  <span>$200</span>
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
                      checked={sort === "priceLowToHigh"}
                      onChange={handleSortChange}
                    />{" "}
                    Low to High
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="priceHighToLow"
                      name="price-sort"
                      checked={sort === "priceHighToLow"}
                      onChange={handleSortChange}
                    />{" "}
                    High to Low
                  </label>
                </form>
              </div>
            </div>
            <div className="flex-1 rounded-lg h-auto mx-auto">
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
