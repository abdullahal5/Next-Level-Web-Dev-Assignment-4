// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-3">
      <div className="border flex items-start">
        <div className="relative inline-block border">
          <img
            src="https://i.ibb.co/g3xTS5q/pretty-smiling-lady-transperent-glasses-wide-smile-white-shirt-with-headset-isolated-white-231208-64.png"
            alt=""
            className="block rounded-lg"
          />
          <div className="absolute inset-0 bg-black/10 "></div>
          {/* <div className="absolute inset-0 p-4 z-10 space-y-4 text-white">
            <h1 className="text-5xl mb-4">Contact Information</h1>
            <p>Report Us</p>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-xl" />
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <span>contact@keynest.vercel.app</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <span>
                Narayanganj, Dhaka, Bangladesh
              </span>
            </div>
          </div> */}
        </div>
        <div className="py-5 flex-1 text-center mx-5">
          <h1 className="text-5xl">Contact Information</h1>
          <p className="pt-2">Report Us</p>
          <div className="flex items-center justify-center gap-10 pt-10">
            <div className="flex items-start flex-col">
              <label className="text-xs font-semibold">First Name</label>
              <input
                type="text"
                className="border-b py-2 outline-none w-72 focus:border border-gray-500 focus:rounded-md px-5"
                placeholder="Jhon"
              />
            </div>
            <div className="flex items-start flex-col">
              <label className="text-xs font-semibold">Last Name</label>
              <input
                type="text"
                className="border-b py-2 outline-none w-72 focus:border border-gray-500 focus:rounded-md px-5"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 pt-20 text-black">
            <div className="flex items-start flex-col">
              <label className="text-xs font-semibold">Email</label>
              <input
                type="email"
                className="border-b py-2 outline-none w-72 focus:border border-gray-500 focus:rounded-md px-5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex items-start flex-col">
              <label className="text-xs font-semibold">Contact Number</label>
              <input
                type="text"
                className="border-b py-2 outline-none w-72 focus:border border-gray-500 focus:rounded-md px-5"
                placeholder="+880 012453 4543"
              />
            </div>
          </div>
          <div className="py-6">
            <label className="text-lg block">Select Subject</label>
            <div className="pt-4 flex items-center gap-5 justify-center">
              <div>
                <input type="radio" name="contact" id="" /> Feedback
              </div>
              <div>
                <input type="radio" name="contact" id="" /> Question
              </div>
              <div>
                <input type="radio" name="contact" id="" /> Partnership
              </div>
              <div>
                <input type="radio" name="contact" id="" /> Issue
              </div>
            </div>
          </div>
          <div className="w-full py-5">
            <input
              type="text"
              className="outline-none border-b border-gray-500 w-full px-4"
              placeholder="Write your message here..."
            />
          </div>
          <button className="px-5 py-2 border rounded-lg bg-[#4ca463] text-white font-semibold">
            Sibmit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
