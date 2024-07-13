import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="text-center mx-auto">
        <h1 className="text-3xl font-medium">
          Oops! <span className="text-[#4ca463]">Something Went</span> Wrong
        </h1>
        <p className="py-1 text-gray-600 text-lg">Best wishes for next time</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#4ca463] text-white text-center mx-auto py-2 px-5 rounded-lg focus:bg-[#4ca463] active:bg-[#4ca463] flex items-center gap-2"
        >
          <IoArrowBack /> Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
