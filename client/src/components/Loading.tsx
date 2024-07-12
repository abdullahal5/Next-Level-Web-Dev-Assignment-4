import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-[#4ca463]" />
    </div>
  );
};

export default Loading;
