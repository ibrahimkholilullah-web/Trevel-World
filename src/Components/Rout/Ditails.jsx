import React from 'react';

const Ditails = ({ditails}) => {
    const {countryImage,
        countryName,
        visaType,
        processingTime,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod,
        requiredDocuments,_id} = ditails
    return (
        <div>
            <img src={countryImage} className='w-full rounded-xl md:h-[80vh]' alt="" />
            <h1 className='text-3xl my-4 font-bold'>Country -: {countryName}</h1>
            <div className='text-lg flex items-center gap-10 md:justify-center my-10'>
             <div>
            <p>* Visa Type : {visaType}</p>
            <p>* Processing Time : {processingTime}</p>
            <p>* Fee : $ {fee}</p>
            <p>* Validity : {validity}</p>
             </div>
            <div>
            <p> * Age R. : {ageRestriction}</p>
            <p> * Document : {requiredDocuments}</p>
            <p> * Application Method : {applicationMethod}</p>
            <p> * Description : {description}</p>
            </div>
            </div>
        </div>
    );
};

export default Ditails;