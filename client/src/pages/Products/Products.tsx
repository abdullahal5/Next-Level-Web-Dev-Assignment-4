import ProductCard from "../../components/shared/ProductCard";

const Products = () => {
  return (
    <div>
      <h1 className="text-center lg:text-3xl md:text-3xl lg:mx-36 md:mx-20 mx-5 pt-5 font-semibold">
        Explore our latest collection of premium keyboards designed for superior
        performance and style
      </h1>
      <div className="my-10 flex items-start gap-5">
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
              // onChange={handleStipend}
              // defaultValue={stipend}
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
            <h1 className="text-2xl py-3">sort products by price</h1>
            <div>
              <label className="flex items-center gap-2">
                <input type="radio" name="price-sort" /> Low to High
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price-sort" /> High to Low
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-lg h-auto">
          <div className="flex items-center justify-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
