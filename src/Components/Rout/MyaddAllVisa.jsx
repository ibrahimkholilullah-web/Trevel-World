import React, { useState } from "react";

const MyAddAllVisa = ({ visa, setVisas,visas }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);

  const handleUpdateClick = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:4500/visa/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const remainingData = visas.filter(visa => visa._id !== id)
        setVisas(remainingData)
    })
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedVisa = {
      countryImage: form.countryImage.value,
      countryName: form.countryName.value,
      visaType: form.visaType.value,
      processingTime: form.processingTime.value,
      fee: form.fee.value,
      validity: form.validity.value,
      applicationMethod: form.applicationMethod.value,
    };
    console.log(updatedVisa)
    // Callback to update visa in the database
    setIsModalOpen(false);
  };

  return (
     
          <div
            key={visa.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            <div>
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {visa.countryName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                Visa Type: {visa.visaType}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Processing Time: {visa.processingTime}
              </p>
              <p className="text-sm text-gray-600 mb-1">Fee: ${visa.fee}</p>
              <p className="text-sm text-gray-600 mb-1">Validity: {visa.validity}</p>
              <p className="text-sm text-gray-600">
                Application Method: {visa.applicationMethod}
              </p>
            </div>
            <div className="mt-4 flex gap-4 justify-center items-center ">
              <button
                onClick={() => handleUpdateClick(visa)}
                className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg px-4 w-1/2 py-2"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteClick(visa._id)}
                className="btn text-black border-2 bg-red-500 font-bold rounded-lg w-1/2 px-4 py-2"
              >
                Delete
              </button>
            </div>

      {/* Update Modal */}
      {isModalOpen && selectedVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 my-4 w-2/3">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Update Visa Information
            </h3>
            <form onSubmit={handleSubmitUpdate} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Country Image URL:</label>
                <input
                  type="url"
                  name="countryImage"
                  defaultValue={selectedVisa.countryImage}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
             <div className="md:flex gap-4 items-center ">
             <div>
                <label className="block font-medium mb-1">Country Name:</label>
                <input
                  type="text"
                  name="countryName"
                  defaultValue={selectedVisa.countryName}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Visa Type:</label>
                <input
                  type="text"
                  name="visaType"
                  defaultValue={selectedVisa.visaType}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
            
              <div>
                <label className="block font-medium mb-1">Processing Time:</label>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={selectedVisa.processingTime}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Fee:</label>
                <input
                  type="number"
                  name="fee"
                  defaultValue={selectedVisa.fee}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              </div>
              <div className="flex gap-5 items-center">
              <div className="md:w-1/2">
                <label className="block font-medium mb-1">Validity:</label>
                <input
                  type="text"
                  name="validity"
                  defaultValue={selectedVisa.validity}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="md:w-1/2">
                <label className="block font-medium mb-1">Application Method:</label>
                <input
                  type="text"
                  name="applicationMethod"
                  defaultValue={selectedVisa.applicationMethod}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-4"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddAllVisa;
