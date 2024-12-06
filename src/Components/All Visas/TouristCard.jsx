import React, { useState } from 'react';
import VisaCard from '../Rout/VisaCard';

const TouristCard = ({filteredVisa}) => {
    console.log(filteredVisa)
    const [visas, setVisas] = useState(filteredVisa)
    console.log(visas)
    return (
        <div className='my-5'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
                visas.map(visa => <VisaCard key={visa._id} setVisas={setVisas} visa={visa} visas={visas} ></VisaCard>)
            }
           </div>
        </div>
    );
};

export default TouristCard;