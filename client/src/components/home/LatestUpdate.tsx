const LatestUpdate = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center pb-8">
        Explore Our Latest Updates
      </h1>
      <div className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 w-full border lg:h-52 lg:py-0 py-4 rounded-lg bg-[#ccf4d8] flex items-center px-2 lg:flex-row md:flex-col flex-col overflow-hidden">
          <div>
            <img
              src="https://i.ibb.co/KD7vm5N/gaming-gear-elegance-white-background-431161-36723-removebg-preview.png z-50"
              className="w"
            />
          </div>
          <div className="w-[60%] text-center">
            <h1 className="text-3xl font-semibold">Buy 1 Get 1 free</h1>
            <p className="my-2 text-sm text-[]">
              Buy One, Get One Free! Don't miss out on this incredible offer.
              Shop now and enjoy double the value
            </p>
            <button className="px-4 py-2 rounded-md text-white bg-[#4c9c64]">
              Buy Now
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 w-full border lg:h-52 lg:py-0 py-4 rounded-lg bg-[#ccf4d8] flex items-center px-2 lg:flex-row md:flex-col relative flex-col group overflow-hidden">
          <img
            src="https://i.ibb.co/R916vZ5/photo-gaming-keyboard-full-length-photo-778780-45655-removebg-preview.png"
            alt="Keyboard"
            className="w-full rounded-md group-hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-md group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <button className="text-white bg-[#4c9c64] px-4 py-2 rounded-md font-bold opacity-100 group-hover:opacity-100">
              Buy Now
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 w-full border lg:h-52 lg:py-0 py-4 rounded-lg bg-[#ccf4d8] flex items-center px-2 lg:flex-row md:flex-col relative flex-col group overflow-hidden">
          <img
            src="https://i.ibb.co/VBvtKFY/images-removebg-preview-2.png"
            alt="Keyboard"
            className="w-full rounded-md group-hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black rounded-md group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <div className="text-white text-center">
              <h1 className="text-2xl">Our Limited Products</h1>
              <p className="mx-20 py-2">
                Don't miss out on our exclusive collection of premium products
                available for a limited time only. Grab yours now before they're
                gone!
              </p>
              <button className="text-white bg-[#4c9c64] px-4 py-2 rounded-md font-bold opacity-100 group-hover:opacity-100">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 w-full border lg:h-52 lg:py-0 py-4 rounded-lg bg-[#ccf4d8] flex items-center px-2 lg:flex-row-reverse md:flex-col flex-col overflow-hidden">
          <div>
            <img
              src="https://i.ibb.co/KD7vm5N/gaming-gear-elegance-white-background-431161-36723-removebg-preview.png z-50"
              className="w"
            />
          </div>
          <div className="w-[70%] text-center">
            <h1 className="text-3xl font-semibold">Use Promo code and Get 30% Discount</h1>
            <p className="my-2 text-sm text-[]">
              Code: #SIMPLE_ASSIGNEMNT4
            </p>
            <button className="px-4 py-2 rounded-md text-white bg-[#4c9c64]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
