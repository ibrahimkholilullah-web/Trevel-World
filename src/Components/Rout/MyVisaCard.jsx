import React from 'react';
import Swal from 'sweetalert2';

const MyVisaCard = ({visa,setMyvisa,myvisa}) => {
    const {countryImage,countryName,visaType,processingTime,fee,validity,date,name,email,applicationMethod,_id} = visa
        const handleDeleteClick = (id) => { 
            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:4500/myvisa/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if(data.deletedCount){
                    Swal.fire({
                      title: "Cancel!",
                      text: "Your file has been Cancel.",
                      icon: "success"
                    });
                    const remainingData = myvisa.filter((visa) => visa._id !== id);
                    setMyvisa(remainingData);
                  }
                
          
                });
            }
          });
           
          };
        
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                   <img className='w-full h-full'
                     src={countryImage}
                     alt="Album" />
                 </figure>
                 <div className="card-body">
                   <div>
                    <div>
                    <h2 className="card-title">{countryName}</h2>
                   <p>{visaType}</p>
                   <p>Processing Time : {processingTime}</p>
                   <p>Fee : $ {fee}</p>
                   <p>Validity : {validity} yers</p>
                   <p>{applicationMethod}</p>
                    </div>
                    <div>
                    <p> Appy Date : {date}</p>
                    <p>Author Name : {name}</p>
                    <p>{email}</p>
                    </div>
                   </div>
                   <div className="card-actions justify-end">
                     <button onClick={() => handleDeleteClick(_id)} className="btn btn-primary">Cancel</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default MyVisaCard;