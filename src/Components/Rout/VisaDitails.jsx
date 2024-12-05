import React, { useContext, useState } from "react";
import { AuthProvider } from "../AuthPrivate/AuthPrivated";
import Navber from "../Component/Navber";
import { useLoaderData } from "react-router-dom";
import Ditails from "./Ditails";

const visaDitails = () => {
  const data = useLoaderData() 
  const {_id} = data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useContext(AuthProvider)
  const handleSubmitVisaForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fullName = `${firstName} ${lastName}`; // Correctly concatenate first and last name
    
    const data = {
      email: form.email.value,
      date: form.appliedDate.value,
      name: fullName,
      fee: form.fee.value,
    };
    
    // Implement your database storage logic here
    console.log("Application Data: ", data,_id);
    fetch(`http://localhost:4500/visa/${_id}/copy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  .then(res => res.json())
   .then(data => console.log(data))
       setIsModalOpen(false);

}


  const handleSubmitVisaDetails = (e) => {
    e.preventDefault();

    // Collect and process AddVisa form data (similar to before)
    alert("Visa details added successfully!");
  };

  return (
    <div className="container mx-auto">
      <Navber></Navber>
      <div className="flex items-center justify-center md:min-h-screen">
      <div className="my-4 w-full bg-[#F1F5EB] rounded-lg p-2 border-2 shadow-2xl ">
        <Ditails ditails={data} ></Ditails>
        <form onSubmit={handleSubmitVisaDetails} className="space-y-4 flex justify-center items-center ">
          {/* AddVisa form fields (same as previous implementation) */}
          <div className="">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg py-2"
            >
              Apply for the Visa
            </button>
            
          </div>
        </form>
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Apply for the Visa
            </h3>
            <form onSubmit={handleSubmitVisaForm} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
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
    </div>
  );
};

export default visaDitails;
