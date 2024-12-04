import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({visa}) => {
    const { countryImage,
      countryName,
      visaType,
      processingTime,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      requiredDocuments,_id} = visa
    return (
        <div>
            <div className="card card-side bg-base-200 shadow-xl">
                <figure>
                  <img className='w-96 h-full  '
                    src={countryImage}
                    alt="Movie" />
                </figure>
                <div className="card-body w-60">
                  <h2 className="card-title">{countryName}</h2>
                  <p className='m-0 p-0'>{visaType}</p>
                  <p className='m-0 p-0'>{description}</p>
                  <p></p>
                  <div className="card-actions justify-end">
                    <Link to={`/visaditails/${_id}`} className=" bg-[#83CD20] px-4 py-2 text-sm text-white rounded-3xl ">See Details</Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;