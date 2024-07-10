import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  {
    name: "Dell Gaming Keybaord G Series",
    description: "Unmatched performance in a sleek design",
    image:
      "https://i.ibb.co/KD7vm5N/gaming-gear-elegance-white-background-431161-36723-removebg-preview.png",
  },
  {
    name: "Multicolored Keyboard with Style",
    description: "Lights up your workspace with vibrant colors",
    image:
      "https://i.ibb.co/Vqdtyh2/multicolored-keyboard-with-multicolored-keys-word-key-bottom-861161-10919-removebg-preview.png",
  },
  {
    name: "Full-Length Gaming Keyboard",
    description: "Enhanced control for all your gaming needs",
    image:
      "https://i.ibb.co/R916vZ5/photo-gaming-keyboard-full-length-photo-778780-45655-removebg-preview.png",
  },
  {
    name: "Ergonomic Keyboard with Wrist Rest",
    description: "Provides comfort and reduces strain during long sessions",
    image:
      "https://i.ibb.co/xHP3nR5/3d-printed-split-design-ergonomic-keyboard-sleek-customizable-with-wrist-rest-846250-1934-removebg-p.png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const { name, description, image } = slides[currentIndex];

  return (
    <div className="py-5 w-full lg:h-[400px] md:h-[400px] h-[600px] relative group">
      <div className="w-full bg-[#ccf4d8] h-full rounded-2xl bg-center bg-cover duration-500">
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-around h-full lg:px-10 md:px-10 gap-10 lg:pt-0 md:pt-0 pt-10">
          <div className="space-y-3 lg:pl-8 md:pl-8 lg:w-[40%] md:w-[40%] lg:text-start md:text-start text-center">
            <h1 className="text-4xl font-semibold">{name}</h1>
            <p>{description}</p>
            <button className="px-4 py-2 rounded-md text-white bg-[#4c9c64]">
              Shop Now
            </button>
          </div>
          <div className="flex-1">
            <img
              src={image}
              className="w-full lg:h-[400px] md:h-[400px] drop-shadow-2xl"
              alt={name}
            />
          </div>
        </div>
      </div>
      <BsChevronCompactLeft
        onClick={prevSlide}
        size={30}
        className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-[#44ac69] text-white cursor-pointer hidden group-hover:block"
        aria-label="Previous Slide"
      />
      <BsChevronCompactRight
        onClick={nextSlide}
        size={30}
        className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-[#44ac69] text-white cursor-pointer hidden group-hover:block"
        aria-label="Next Slide"
      />
      <div className="flex justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-[#4ca463]" : ""
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
