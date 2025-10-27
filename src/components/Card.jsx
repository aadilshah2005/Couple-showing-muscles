import React from "react";
import sports from "../assets/gym-muscular-man-and-woman.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Card() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center px-4 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg w-full max-w-6xl p-6 sm:p-8 md:p-10 gap-10 md:gap-8">

          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-2 leading-tight">
              WORKOUTS MADE
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-teal-500 mb-6 leading-tight">
              EXCLUSIVE FOR YOU!
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
              We create <span className="font-semibold">exclusive and unique workouts</span> for you. <br className="hidden sm:block" />
              Invest in your body and <span className="font-semibold">get much more performance</span> <br className="hidden sm:block" />
              and quality of life.
            </p>

            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 ease-in-out">
              Start Now
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={sports}
              alt="Workout"
              className="w-[220px] sm:w-[300px] md:w-[450px] h-auto object-cover rounded-xl shadow-md"
            />
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Card;
