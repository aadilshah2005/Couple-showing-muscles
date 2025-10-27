import React from "react";
import sports from "../assets/gym-muscular-man-and-woman.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Card() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg w-[90%] md:w-[80%] h-auto md:h-[70%] p-10">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">WORKOUTS MADE</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-500 mb-6">EXCLUSIVE FOR YOU!</h1>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              We create <span className="font-semibold">exclusive and unique workouts</span> for you. <br />
              Invest in your body and <span className="font-semibold">get much more performance</span> <br />
              and quality of life.
            </p>

            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition">
              Start now
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={sports}
              alt="Workout"
              className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] object-cover rounded-xl"
            />
          </div>

        </div>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default Card;
