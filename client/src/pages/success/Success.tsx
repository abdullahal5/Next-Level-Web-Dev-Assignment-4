import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [audio] = useState(
    new Audio("/cheering-and-clapping-crowd-1-5995.mp3")
  );
  const [, setIsPlaying] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [modalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
    pauseAudio();
  };

  const playAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      <p className="text-3xl font-semibold my-5 text-center">
        Payment Successfull
      </p>
      <img className="mx-auto" src="/6k2.gif" alt="Success Animation" />
      <div className="text-center pt-4">
        <Link
          to={"/"}
          className="px-4 py-2 font-semibold rounded-md text-white bg-[#4c9c64]"
        >
          Go Home
        </Link>
      </div>
      {modalIsOpen && (
        <div
          id="progress-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={closeModal}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="progress-modal"
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
              <div className="p-6 text-center">
                <img
                  src="/7efs.gif"
                  alt="Success GIF"
                  className="mx-auto mb-4"
                />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Your transaction is complete. May your days be filled with joy
                  and blessings!
                </h3>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 font-semibold rounded-md text-white bg-[#4c9c64]"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
