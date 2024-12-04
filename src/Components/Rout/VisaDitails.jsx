import React, { useState } from "react";

const visaDitails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedInUser] = useState({ email: "user@example.com" }); // Mock user data
  const currentDate = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD

  const handleSubmitVisaForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      email: form.email.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      appliedDate: form.appliedDate.value,
      fee: form.fee.value,
    };

    // Implement your database storage logic here
    console.log("Application Data: ", data);
    alert("Visa application submitted successfully!");

    // Close modal after submission
    setIsModalOpen(false);
  };

  const handleSubmitVisaDetails = (e) => {
    e.preventDefault();

    // Collect and process AddVisa form data (similar to before)
    alert("Visa details added successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
      <div className="my-4 w-2/3 bg-[#F1F5EB] rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Add Visa</h2>
        <form onSubmit={handleSubmitVisaDetails} className="space-y-4">
          {/* AddVisa form fields (same as previous implementation) */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg py-2"
            >
              Apply for the Visa
            </button>
            <button
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg py-2"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Apply for the Visa
            </h3>
            <form onSubmit={handleSubmitVisaForm} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={loggedInUser.email}
                  readOnly
                  className="input input-bordered w-full border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Applied Date:</label>
                <input
                  type="date"
                  name="appliedDate"
                  value={currentDate}
                  readOnly
                  className="input input-bordered w-full border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Fee:</label>
                <input
                  type="number"
                  name="fee"
                  className="input input-bordered w-full border-gray-300 rounded-lg"
                  placeholder="Enter visa fee"
                  required
                />
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
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default visaDitails;
