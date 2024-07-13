import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-3">
        Choose Payment
      </h1>
      <div className="flex items-center justify-center gap-5 lg:flex-row md:flow-row flex-col py-10">
        <Link to={"/checkout/cashondelivery"}>
          <div>
            <div className="w-80 border h-52 lg:py-0 py-4 rounded-lg bg-[#ccf4d8] flex items-center px-2 lg:flex-row md:flex-col relative flex-col group overflow-hidden">
              <img
                src="https://i.ibb.co/Q9dWWHQ/front-view-female-courier-yellow-shirt-yellow-cap-black-jeans-smiling-holding-coffee-cup-white-14072.png"
                alt="Keyboard"
                className="w-full rounded-md group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-md group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="text-white text-center">
                  <h1 className=" text-2xl font-semibold">Cash on Delivery</h1>
                  <p className="px-12 py-1">
                    Experience the convenience of cash on delivery, where
                    payment meets ease at your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/checkout/stripe"}>
          <div>
            <div className="w-80 border h-52 lg:py-0 py-4 rounded-lg bg-[#ccf4d8] flex items-center px-2 lg:flex-row md:flex-col relative flex-col group overflow-hidden">
              <img
                src="https://i.ibb.co/Rp6yTcT/portrait-expressive-young-woman-with-credit-card-removebg-preview.png"
                alt="Keyboard"
                className="w-full rounded-md group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black rounded-md group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="text-white text-center">
                  <h1 className=" text-2xl font-semibold">Stripe Payment</h1>
                  <p className="px-12 py-1">
                    Enjoy the seamless convenience of card payments, ensuring
                    secure transactions with just a swipe or tap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
