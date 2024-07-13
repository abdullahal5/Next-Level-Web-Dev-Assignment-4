import { FaEdit, FaPlus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../reudux/features/product/productApi";

interface IProduct {
  _id: string;
  coverImage: string;
  name: string;
  price: number;
  brand: string;
}

const Dashboard = () => {
  const { data, isLoading, refetch } = useGetAllProductsQuery({});
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<string>("");
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = (id: string) => {
    setProductIdToDelete(id);
    setDeleteModalVisible(true);
  };

  const confirmDeleteProduct = async () => {
    setDeleteModalVisible(false);
    try {
      const deleteproduct = await deleteProduct({
        id: productIdToDelete,
      }).unwrap();
      if (deleteproduct?.success === true) {
        refetch();
        toast.success(deleteproduct.message);
      }
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  const handleAddProductToggle = () => {
    setAddModalVisible(!isAddModalVisible);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-center pt-5">Dashboard</h1>
          <p className="text-center text-gray-500 lg:mx-44 pt-2">
            Welcome to KeyNest Dashboard! <br /> Stay updated with your product
            inventory, manage orders efficiently, and get insights into your
            sales performance. Explore the latest trends and keep track of your
            best-selling keyboards. Let’s make your e-commerce experience
            seamless and productive!
          </p>
          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={handleAddProductToggle}
              className="px-4 py-2 flex items-center gap-2 rounded-md text-white bg-[#4c9c64] font-semibold"
            >
              <FaPlus /> Add Product
            </button>
            <p className="border px-4 py-2 rounded-md inline-block border-[#4c9c64] font-semibold text-[#4c9c64]">
              Total data {data?.data.length}
            </p>
          </div>

          <div className="relative overflow-x-auto sm:rounded-lg my-10">
            <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              {data?.data?.map((product: IProduct) => (
                <tbody key={product._id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 text-center dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product?._id.slice(-6)}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-12 h-12 object-cover rounded-full mx-auto"
                        src={product?.coverImage}
                        alt=""
                      />
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4">${product?.price}</td>
                    <td className="px-6 py-4">{product?.brand}</td>
                    <td className="px-6 py-4 flex items-start gap-2 justify-center">
                      <Link to={`/product`}>
                        <div className="bg-blue-500 p-2 rounded-md inline-block text-white">
                          <FaEdit fontSize={"1.3rem"} />
                        </div>
                      </Link>
                      <div
                        onClick={() => handleDeleteProduct(product?._id)}
                        className="bg-red-500 p-2 rounded-md inline-block text-white cursor-pointer"
                      >
                        <ImBin fontSize={"1.3rem"} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          {isDeleteModalVisible && (
            <div
              id="popup-modal"
              className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setDeleteModalVisible(false)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4 md:p-5 text-center">
                    <svg
                      className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1-18 0Z"
                      />
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this product?
                    </h3>
                    <button
                      onClick={confirmDeleteProduct}
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      onClick={() => setDeleteModalVisible(false)}
                      type="button"
                      className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#4c9c64] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isAddModalVisible && (
            <div
              id="crud-modal"
              className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Create New Product
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleAddProductToggle}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type product name"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="$2999"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Category
                        </label>
                        <select
                          id="category"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected>Select category</option>
                          <option value="TV">TV/Monitors</option>
                          <option value="PC">PC</option>
                          <option value="GA">Gaming/Console</option>
                          <option value="PH">Phones</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Product Description
                        </label>
                        <textarea
                          id="description"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write product description here"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="me-1 -ms-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Add new product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
