import React, { useState } from 'react';
import VisaCard from '../Rout/VisaCard';
import noData from '../../assets/no data.avif'
const TouristCard = ({filteredVisa}) => {
    console.log(filteredVisa)
    const [visas, setVisas] = useState(filteredVisa)
    console.log(visas)
    return (
        <div className='my-5'>
           
           {visas.length > 0 ? (
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {visas.map((visa) => <VisaCard key={visa._id} visa={visa} />)}  </div>
           ):(
           <>
           <img src={noData} className='md:w-2/3 mx-auto border-2 border-[#1B5E20] p-1 rounded-xl' alt="" />
            <p className='text-center'>No Visa here</p>
           </>
           )}
          
         
           
        </div>
    );
};

export default TouristCard;