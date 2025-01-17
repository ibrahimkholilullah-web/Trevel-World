import React, { useState } from "react";
import Swal from "sweetalert2";

const MyAddAllVisa = ({ visa, setVisas, visas }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const { _id } = visa;

  const handleUpdateClick = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-projects-server.vercel.app/visa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingData = visas.filter((visa) => visa._id !== id);
              setVisas(remainingData);
            }
          });
      }
    });
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
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      fetch(`https://b10-a10-projects-server.vercel.app/visa/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedVisa),
      })
        .then((res) => res.json())
        .then((data) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            const updatedVisas = visas.map((v) =>
              v._id === _id ? { ...v, ...updatedVisa } : v
            );
            setVisas(updatedVisas);
            setIsModalOpen(false);
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg dark:bg-black p-1 border border-[#83CD20] flex flex-col justify-between w-full">
      <div>
        <img
          src={visa.countryImage}
          alt={visa.countryName}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold dark:text-[#43A047] text-gray-800 mb-2">
            {visa.countryName}
          </h3>
          <p className="text-sm text-[#034833] mb-1">
            Visa Type: {visa.visaType}
          </p>
          <p className="text-sm text-[#034833] mb-1">
            Processing Time: {visa.processingTime}
          </p>
          <p className="text-sm text-[#034833] mb-1">Fee: ${visa.fee}</p>
          <p className="text-sm text-[#034833] mb-1">Validity: {visa.validity}</p>
          <p className="text-sm text-[#034833]">
            Application Method: {visa.applicationMethod}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => handleUpdateClick(visa)}
          className="btn bg-[#83CD20] hover:bg-yellow-600 text-white font-bold rounded-lg px-4 py-2 w-full sm:w-auto"
        >
          Update
        </button>
        <button
          onClick={() => handleDeleteClick(visa._id)}
          className="btn bg-red-500 text-white hover:bg-red-600 font-bold rounded-lg px-4 py-2 w-full sm:w-auto"
        >
          Delete
        </button>
      </div>

      {isModalOpen && selectedVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black dark:border-[#43A047] dark:border rounded-lg p-6 w-full max-w-sm md:max-w-md lg:max-w-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Update Visa Information
            </h3>
            <form onSubmit={handleSubmitUpdate} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">
                  Country Image URL:
                </label>
                <input
                  type="url"
                  name="countryImage"
                  defaultValue={selectedVisa.countryImage}
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <label className="block font-medium mb-1">
                    Processing Time:
                  </label>
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
                <div>
                  <label className="block font-medium mb-1">Validity:</label>
                  <input
                    type="text"
                    name="validity"
                    defaultValue={selectedVisa.validity}
                    className="input input-bordered w-full border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Application Method:
                  </label>
                  <input
                    type="text"
                    name="applicationMethod"
                    defaultValue={selectedVisa.applicationMethod}
                    className="input input-bordered w-full border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-4">
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
