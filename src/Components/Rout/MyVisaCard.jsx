import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyVisaCard = ({ visa, setMyvisa, myvisa }) => {
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    date,
    name,
    email,
    applicationMethod,
    _id,
  } = visa;

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10-a10-projects-server.vercel.app/myvisa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your file has been cancelled.",
                icon: "success",
              });
              const remainingData = myvisa.filter((visa) => visa._id !== id);
              setMyvisa(remainingData);
            }
          });
      }
    });
  };

  return (
    <Link className="p-2 border border-blue-400 rounded-xl">
      <div className=" bg-base-100 lg:flex shadow-xl md:h-[550px] gap-5 rounded-xl lg:h-[350px]">
        {/* Image Section */}
        <div>
          <img
            className="object-cover w-full h-full rounded-xl"
            src={countryImage}
            alt={countryName}
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex justify-between flex-col w-full">
          <div>
            <h2 className="card-title">{countryName}</h2>
            <p>{visaType}</p>
            <p>Processing Time: {processingTime}</p>
            <p>Fee: $ {fee}</p>
            <p>Validity: {validity} years</p>
            <p>{applicationMethod}</p>
          </div>

          <div>
            <p>Apply Date: {date}</p>
            <p>Author Name: {name}</p>
            <p>Email: {email}</p>
          </div>

          {/* Button Section */}
          <div className="card-actions justify-end mt-4">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent Link redirection
                handleDeleteClick(_id);
              }}
              className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyVisaCard;
