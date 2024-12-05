import React from "react";
import { FaPlaneDeparture, FaChartLine, FaGlobe } from "react-icons/fa";
import visaone from "../../assets/about-img-2.png"
const ExtraSectionTwo = () => {
  return (
    <div className="container mx-auto dark:bg-black dark:text-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2 flex flex-col gap-6">
        {/* Background Image */}
        <div className="rounded-lg overflow-hidden shadow-md border p-2 border-[#43A047]">
          <img
            src='https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/about-4-img-1.png'
            alt="Travel essentials"
            className="w-full"
          />
        </div>
        {/* Foreground Image */}
        <div className="absolute top-10 left-10 rounded-lg overflow-hidden shadow-md border w-3/4 lg:w-1/2">
          <img
            src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/about-img-1.png"
            alt="Happy travelers"
            className="w-full"
          />
        </div>
        {/* Experience Box */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center justify-center text-green-900 text-xl font-bold absolute -bottom-12 left-1/4 lg:left-20">
          15+ <span className="text-sm ml-2">Years of Experience</span>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-green-900 text-xl dark:text-white  font-medium uppercase mb-2">
          About Us
        </h2>
        <h1 className="text-green-900 dark:text-[#43A047]  text-3xl md:text-4xl font-bold mb-4">
          Welcome to Visa & Immigration Consultancy
        </h1>
        <p className="text-gray-600 dark:text-white  mb-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humour
          or randomised words which don't look even slightly believable.
        </p>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-lime-200 rounded-full dark:bg-black dark:border ">
              <FaChartLine className="text-lime-600 text-2xl dark:text-white " />
            </div>
            <div>
              <h3 className="text-green-900 dark:text-[#43A047]  font-bold text-lg">
                Accurate Guidance
              </h3>
              <p className="text-gray-600 dark:text-[#43A047] ">
                Skilled professionals are always ready to provide reliable
                services to our clients!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 bg-lime-200 rounded-full dark:bg-black dark:border ">
              <FaGlobe className="text-lime-600 text-2xl dark:text-white " />
            </div>
            <div>
              <h3 className="text-green-900 font-bold text-lg dark:text-white ">Our Presence</h3>
              <p className="text-gray-600 dark:text-white ">
                Skilled professionals are always ready to provide reliable
                services to our clients!
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <button className="mt-8 bg-lime-500 dark:bg-black dark:border  dark:text-[#43A047]  text-white py-2 px-6 rounded-lg font-medium flex items-center hover:bg-lime-600">
          Read More
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
