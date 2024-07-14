import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../reudux/hooks";
import { RootState } from "../../../reudux/store";
import { useCreatePaymentWithCashOnDeliveryMutation } from "../../../reudux/features/payment/PaymentApi";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../reudux/features/cart/cartSlice";

type TProduct = {
  _id: string;
  name: string;
  coverImage: string;
  brand: string;
  description?: string;
  quantity: number;
  price: number;
  rating: number;
  orderQuantity: number;
  orderPrice: number;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cart: TProduct[];
  totalPrice: number;
};

const CashOnDelivery = () => {
  const [createPayment] = useCreatePaymentWithCashOnDeliveryMutation();
  const cart = useAppSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce((acc, item) => acc + item.orderPrice, 0);

  const handleGetPaymentData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      cart: cart,
      totalPrice: totalPrice,
    };

    const response = await createPayment(data).unwrap();
    if (response.success === true) {
      dispatch(clearCart([]));
      navigate("/success");
    }
  };

  return (
    <div className="mx-auto text-center mt-10">
      <div className="border inline-block lg:p-8 md:p-8 p-4 rounded-lg">
        <h1 className="text-3xl font-semibold text-center py-5">
          Cash on delivery
        </h1>
        <form onSubmit={handleGetPaymentData}>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-5">
            <div>
              <label
                className="text-sm font-semibold block text-left"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border mt-1 outline-none rounded-md w-72 py-2 px-2"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div>
              <label
                className="text-sm font-semibold block text-left"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border mt-1 outline-none rounded-md w-72 py-2 px-2"
                placeholder="Enter your E-mail"
                required
              />
            </div>
          </div>
          <div className="flex items-center lg:flex-row md:flex-row flex-col justify-center gap-5 pt-5">
            <div>
              <label
                className="text-sm font-semibold block text-left"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="border mt-1 outline-none rounded-md w-72 py-2 px-2"
                placeholder="Enter your Number"
                required
              />
            </div>
            <div>
              <label
                className="text-sm font-semibold block text-left"
                htmlFor="address"
              >
                Delivery address
              </label>
              <input
                type="text"
                name="address"
                className="border mt-1 outline-none rounded-md w-72 py-2 px-2"
                placeholder="Enter your Address"
                required
              />
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="px-4 w-64 font-semibold py-2 rounded-md text-white bg-[#4c9c64]"
            >
              Place Order ${totalPrice}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CashOnDelivery;
