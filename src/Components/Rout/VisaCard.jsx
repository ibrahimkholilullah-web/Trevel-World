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
            <div className="card sm:card-side bg-base-200 shadow-xl border border-[#83CD20] p-1">
                <figure>
                  <img className='md:w-96 md:h-[250px]'
                    src={countryImage}
                    alt="Movie" />
                </figure>
                <div className="card-body md:w-60">
                  <h2 className="md:card-title text-lg">{countryName}</h2>
                  <p className='m-0 p-0 text-[12px]'>{visaType}</p>
                  <p className='m-0 p-0 text-[12px]'>{description}</p>
                  <p></p>
                  <div className="md:card-actions md:justify-end">
                    <Link to={`/visaditails/${_id}`} className=" bg-[#83CD20] px-4 py-2 text-[12px] text-white rounded-3xl ">See Details</Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;