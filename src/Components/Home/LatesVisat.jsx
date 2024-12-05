import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LatesVisat = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  // Fetch the latest visas from the backend
  useEffect(() => {
    fetch("http://localhost:4500/visa") // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        // Reverse the data to show the latest visas first
        setLatestVisas(data.reverse());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-gray-100 py-8 dark:bg-black dark:text-white ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#034833] dark:text-white text-center mb-6">
          Latest Visas
        </h2>

        {/* Visa Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestVisas.slice(0,6).map((visa) => (
            <div
              key={visa._id}
              className="bg-[#F1F5EB] dark:bg-black border-2 border-[#83CD20] rounded-lg shadow-lg p-2 flex flex-col justify-between"
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-64 object-cover dark:border-[#83CD20] border-red-300 border rounded-lg mb-4"
              />
             <div className="px-4">
             <h3 className="text-lg dark:text-[#43A047] font-semibold text-[#034833] mb-2">
                {visa.countryName}
              </h3>
              <p className="text-sm dark:text-white text-[#034833] mb-1">
                Visa Type: {visa.visaType}
              </p>
              <p className="text-sm dark:text-white text-[#034833] mb-1">
                Processing Time: {visa.processingTime}
              </p>
              <p className="text-sm dark:text-white text-[#034833] mb-1">Fee: ${visa.fee}</p>
              <p className="text-sm dark:text-white text-[#034833] mb-1">
                Validity: {visa.validity}
              </p>
              <p className="text-sm dark:text-white text-[#034833]">
                Application Method: {visa.applicationMethod}
              </p>
             </div>
              <button
                onClick={() => navigate(`/visaditails/${visa._id}`)}
                className="btn bg-[#83CD20] hover:bg-green-600 text-white dark:text-black font-bold rounded-lg px-4 py-2 mt-4"
              >
                See Details
              </button>
            </div>
          ))}
        </div>

        {/* "See All Visas" Button */}
        <div className="text-center mt-8">
          <Link
            to="/allvisa"
            className="btn bg-green-500 hover:bg-green-600 dark:text-black text-white font-bold rounded-lg px-6 py-3"
          >
            See All Visas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatesVisat;
