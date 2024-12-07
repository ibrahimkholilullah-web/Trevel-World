import React from "react";
import { FaPlaneDeparture, FaChartLine, FaGlobe } from "react-icons/fa";
import visaone from "../../assets/about-img-2.png"
const ExtraSectionTwo = () => {
  return (
    <div className=" dark:bg-black dark:text-white px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2 flex flex-col md:gap-6">
        {/* Background Image */}
        <iframe height={500} src="https://lottie.host/embed/d8d1f2d9-ff83-41e8-af17-f85d8e0b437e/0XG2DFLG57.lottie"></iframe>
        {/* Experience Box */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center justify-center text-green-900 text-xl font-bold absolute md:-bottom-6 left-1/4 lg:left-20">
          15+ <span className="text-sm ml-2">Years of Experience</span>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2">
        <div className=" flex  items-center">
        <h2 className="text-green-900 text-xl dark:text-white  font-medium uppercase mb-2">
          About Us
        </h2>
        </div>
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

      </div>
    </div>
  );
};

export default ExtraSectionTwo;
