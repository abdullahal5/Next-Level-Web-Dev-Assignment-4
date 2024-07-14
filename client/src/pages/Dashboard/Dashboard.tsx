/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaEdit, FaPlus, FaTimes, FaUpload } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Loading from "../../components/Loading";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../reudux/features/product/productApi";
import { uploadFileToImgBB } from "../../utils/uploadImageToImageBB";
import UpdateModal from "../../components/UpdateModal";

interface IProduct {
  _id: string;
  coverImage: string;
  name: string;
  price: number;
  brand: string;
}

type TProduct = {
  _id: string;
  name: string;
  coverImage: string;
  brand: string;
  description?: string;
  quantity: number;
  price: number;
  rating: number;
  orderQuantity?: number;
  orderPrice?: number;
};

const Dashboard = () => {
  const { data, isLoading, refetch } = useGetAllProductsQuery({});
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState<TProduct>({
    _id: "",
    name: "",
    coverImage: "",
    brand: "",
    quantity: 0,
    price: 0,
    rating: 0,
  });
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<string>("");
  const [deleteProduct] = useDeleteProductMutation();
  const [createProduct] = useCreateProductMutation();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  const handleDeleteProduct = (id: string) => {
    setProductIdToDelete(id);
    setDeleteModalVisible(true);
  };

  const handleUpdateProduct = (id: string) => {
    const filter = data?.data.find((item: TProduct) => item._id === id);
    if (filter) {
      setSelectedProductData(filter);
      setUpdateModalVisible(true);
    }
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

  type FormData = {
    name: string;
    price: number;
    quantity: number;
    brand: string;
    rating: number;
    coverImage: string;
    description: string;
  };

  const handlePostProduct = async (e: FormEvent<HTMLFormElement>) => {
    const toastId = toast.loading("Please wait");
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const quantity = parseInt(formData.get("quantity") as string, 10);
    const brand = formData.get("brand") as string;
    const rating = parseFloat(formData.get("rating") as string);
    const description = formData.get("description") as string;

    const fileInput = (formData.get("image") as File) || null;

    if (!fileInput) {
      console.error("No file selected");
      return;
    }

    const coverImage = await uploadFileToImgBB(fileInput);
    if (!coverImage) {
      console.error("Failed to upload image");
      return;
    }

    const data: FormData = {
      name,
      price,
      quantity,
      brand,
      rating,
      coverImage,
      description,
    };

    try {
      const response = await createProduct(data).unwrap();
      if (response.success) {
        refetch();
        toast.dismiss(toastId);
        toast.success(response.message);
        setAddModalVisible(false);
        clearFile();
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="px-2">
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
                      <div
                        className="cursor-pointer"
                        onClick={() => handleUpdateProduct(product?._id)}
                      >
                        <div className="bg-blue-500 p-2 rounded-md inline-block text-white">
                          <FaEdit fontSize={"1.3rem"} />
                        </div>
                      </div>
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
                  <form onSubmit={handlePostProduct} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-1">
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
                      <div className="col-span-1">
                        <label
                          htmlFor="brand"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Brand
                        </label>
                        <input
                          type="text"
                          name="brand"
                          id="brand"
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
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          id="quantity"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="$2999"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="price"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Rating
                        </label>
                        <input
                          type="number"
                          name="rating"
                          id="rating"
                          min={0}
                          max={10}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="$2999"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="image"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Image Upload
                        </label>
                        <label className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                          <FaUpload className="text-xl" />
                          <span>
                            {selectedFile ? selectedFile.name : "Select a file"}
                          </span>
                          <input
                            name="image"
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            required
                          />
                          {selectedFile && (
                            <button
                              className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                              onClick={clearFile}
                              aria-label="Clear selection"
                            >
                              <FaTimes />
                            </button>
                          )}
                        </label>
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
                          name="description"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write product description here"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-white inline-flex items-center bg-[#44ac69] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

          {isUpdateModalVisible && (
            <UpdateModal
              isUpdateModalVisible={isUpdateModalVisible}
              setUpdateModalVisible={setUpdateModalVisible}
              productData={selectedProductData}
              refetch={refetch}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
