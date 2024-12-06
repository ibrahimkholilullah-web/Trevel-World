import React from 'react';
import TouristCard from './TouristCard';
import { useLoaderData } from 'react-router-dom';

const OffcialVisa = () => {


    const loadCategory = useLoaderData();
    const offcialVisa = "Official Visa"
    const filteredVisa = loadCategory.filter((visa) => visa.visaType === offcialVisa);
    console.log(filteredVisa)


    return (
        <div>
             <h1 className='text-center text-2xl font-bold text-[] my-3'>Offcial Visa</h1>
            
            <TouristCard filteredVisa={filteredVisa}></TouristCard>        
        </div>
    );
};

export default OffcialVisa;