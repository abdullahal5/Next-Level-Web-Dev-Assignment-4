import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../reudux/hooks";
import { RootState } from "../../reudux/store";
import { ImBin } from "react-icons/im";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../../reudux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDeleteCart = (id: string) => {
    dispatch(removeCart(id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.orderPrice, 0);

  const isAnyProductZero = cart.some((item) => item.quantity === 0);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-5 my-5">
      <div className="border lg:flex-1 rounded-lg mx-auto w-full overflow-x-auto">
        <div className="relative overflow-x-auto sm:rounded-lg m-5">
          <table className="w-full text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6">
                    Your cart is empty. Please add product
                  </td>
                </tr>
              ) : (
                cart.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 text-center dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item?._id.slice(-6)}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <img
                        className="w-12 h-12 object-cover rounded-full mx-auto"
                        src={item?.coverImage}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item?.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleDecreaseQuantity(item._id)}
                          disabled={item.orderQuantity <= 1}
                          className="p-2 hover:bg-gray-300 rounded-full duration-300 disabled:cursor-not-allowed"
                        >
                          <FaMinus />
                        </button>
                        <input
                          className="text-center outline-none py-2 text-md font-semibold border lg:pl-[13px] w-16 rounded-md"
                          type="number"
                          readOnly
                          value={item.orderQuantity}
                        />
                        <button
                          onClick={() => handleIncreaseQuantity(item._id)}
                          disabled={item.orderQuantity >= item.quantity}
                          className="p-2 hover:bg-gray-300 rounded-full duration-300 disabled:cursor-not-allowed"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item?.orderPrice}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        onClick={() => handleDeleteCart(item._id)}
                        className="flex items-center gap-2 justify-center cursor-pointer"
                      >
                        <div className="bg-red-500 p-2 rounded-md inline-block text-white">
                          <ImBin fontSize={"1.3rem"} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mx-auto w-full lg:w-auto">
        <div className="border w-full lg:w-80 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Pricing Details</p>
            <p className="text-lg px-2 rounded-full border">{cart?.length}</p>
          </div>
          <hr className="my-3" />
          <div>
            {cart.map((item) => (
              <div key={item._id}>
                <div className="flex items-center justify-between text-md space-y-1 text-gray-700">
                  <p>{item.name}</p>
                  <p>{item.orderPrice}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-3" />
          <p className="flex items-center justify-between font-semibold">
            <span>Total Price:</span> <span>${totalPrice}</span>
          </p>
        </div>
        <div className="text-center">
          <Link to={"/checkout"}>
            <button
              disabled={cart.length === 0 || isAnyProductZero}
              className="text-center border rounded-md w-full py-2 hover:text-[#4c9c64] text-white bg-[#4c9c64] hover:bg-white duration-300 border-[#4c9c64] font-semibold mt-4 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
