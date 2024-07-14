import { FaStar } from "react-icons/fa";

const Review = () => {
  const feedbackData = [
    {
      name: "Fahim",
      image:
        "https://i.ibb.co/58sVYf0/Whats-App-Image-2024-04-11-at-20-57-18-71e45dce.jpg",
      text: "The navigation bar needs better alignment for mobile devices.Increase the font size for better readability on smaller screens.",
    },
    {
      name: "Nobel",
      image: "https://i.ibb.co/cY6Y8qF/Screenshot-2024-07-06-164611.png",
      text: "Consider optimizing image loading to improve page speed.The form's error messages could be more user-friendly and specific.",
    },
    {
      name: "Fahim",
      image:
        "https://i.ibb.co/58sVYf0/Whats-App-Image-2024-04-11-at-20-57-18-71e45dce.jpg",
      text: "Add more spacing between sections to avoid a cluttered layout.The color contrast in the footer could be enhanced for accessibility.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center pb-8">
        What Our Client says?
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {feedbackData?.map((feedback, index) => (
            <div
              key={index}
              className={`bg-base-100 h-48 lg:w-[350px] md:w-[350px] py-5 px-4 rounded-md border transition-transform duration-300 ${index === 1 ? "lg:scale-110": "" }`}
            >
              <div className="flex gap-4 items-center">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={feedback.image}
                  width={40}
                  height={40}
                  alt={`Picture of ${feedback.name}`}
                />
                <div>
                  <h1 className="text-xl">{feedback.name}</h1>
                  <div className="text-orange-400 flex gap-1 text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className="text-sm pt-3">{feedback.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
