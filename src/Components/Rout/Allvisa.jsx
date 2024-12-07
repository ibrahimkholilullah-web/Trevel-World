import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddAllVisa from './MyaddAllVisa';
import VisaCard from './VisaCard';

const Allvisa = () => {
    const allvisa = useLoaderData();
    const [visas, setVisas] = useState(allvisa);

    return (
        <div className='dark:bg-black'>
            <h1 className="md:text-2xl dark:text-white font-semibold text-gray-700 text-center">
                Total Visas: {visas.length}
            </h1>
            <h2 className="md:text-3xl dark:text-white font-bold text-center mb-6 text-gray-700 border-b-2 pb-8 border-[#034833]">
                My Added Visas
            </h2>
            <div className="grid m-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 dark:my-0 my-4">
                {visas.map(visa => (
                    <VisaCard
                        key={visa._id}
                        setVisas={setVisas}
                        visas={visas}
                        visa={visa}
                    />
                ))}
            </div>
        </div>
    );
};

export default Allvisa;
