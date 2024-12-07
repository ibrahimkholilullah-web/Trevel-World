import React from "react";
import { toast } from "react-toastify";

const AddVisa = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.application.value;

    // Collect checkbox values
    const requiredDocuments = Array.from(
      form.querySelectorAll('input[name="requiredDocuments"]:checked')
    ).map((checkbox) => checkbox.value);

    // Example data structure to store
    const visaData = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      requiredDocuments,
    };
    
    fetch('http://localhost:4500/visa',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(visaData)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        toast.success("Visa added successfully!")
    })
  };

  return (
    <div className="flex items-center justify-center dark:bg-black min-h-screen ">
      <div className="my-4 md:w-2/3 dark:bg-black bg-[#F1F5EB] border dark:border-[#43A047] rounded-lg m-1  text-sm shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white text-gray-700">Add Visa</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Country Image and Name */}
          <div className="md:flex items-center gap-5 justify-start  ">
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white  ">Country Image URL:</label>
              <input
                type="url"
                name="countryImage"
                className="input input-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                placeholder="Enter country image URL"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Country Name:</label>
              <input
                type="text"
                name="countryName"
                className="input input-bordered w-full dark:text-white  border-gray-300 focus:border-blue-500 rounded-lg"
                placeholder="Enter country name"
                required
              />
            </div>
          </div>

          {/* Visa Type and Processing Time */}
          <div className="flex justify-start items-center gap-5">
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Visa Type:</label>
              <select
                name="visaType"
                className="select select-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                required
              >
                <option value="">Select Visa Type</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Processing Time:</label>
              <input
                type="text"
                name="processingTime"
                className="input input-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                placeholder="Enter processing time"
                required
              />
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <label className="block font-medium mb-1 dark:text-white ">Required Documents:</label>
            <div className="space-y-2">
              {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map(
                (doc, index) => (
                  <label key={index} className="flex items-center dark:text-white">
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value={doc}
                      className="checkbox dark:border-white"
                    />
                    <span className="ml-2">{doc}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1 dark:text-white ">Description:</label>
            <textarea
            maxLength={200}
              name="description"
              className="textarea textarea-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
              placeholder="Enter description"
              required
            ></textarea>
          </div>

          {/* Age Restriction and Fee */}
          <div className="md:flex justify-start items-center gap-5">
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Age Restriction:</label>
              <input
                type="number"
                name="ageRestriction"
                className="input input-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                placeholder="Enter age restriction"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Fee:</label>
              <input
                type="number"
                name="fee"
                className="input input-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                placeholder="Enter fee"
                required
              />
            </div>
          </div>

          {/* Validity and Application Method */}
          <div className="md:flex justify-start items-center gap-5">
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Validity:</label>
              <input
                type="text"
                name="validity"
                className="input input-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                placeholder="Enter validity period"
                required
              />
            </div>
            <div className="md:w-1/2">
              <label className="block font-medium mb-1 dark:text-white ">Application Method:</label>
              <select
                name="application"
                className="select select-bordered w-full border-gray-300 focus:border-blue-500 rounded-lg"
                required
              >
                <option value="">Select Method</option>
                <option value="Online Application">Online Application</option>
                <option value="In-Person Application at an Embassy/Consulate">In-Person Application at an Embassy/Consulate</option>
                <option value="Visa Application Centers (VACs)">Visa Application Centers (VACs)</option>
                <option value="On-Arrival Visa (VOA)">On-Arrival Visa (VOA)</option>
              </select>
        
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-2"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
