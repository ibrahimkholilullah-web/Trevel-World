import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddAllVisa from './MyaddAllVisa';

const Allvisa = () => {
    const allvisa = useLoaderData()
    const [visas, setVisas] = useState(allvisa)
    console.log(allvisa)
    return (
        <div>
            <h1>{visas.length}</h1>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
               My Added Visas
             </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4'>
                {
                    visas.map(visa => <MyAddAllVisa key={visa._id} setVisas={setVisas} visas={visas} visa={visa}></MyAddAllVisa>)
                }
            </div>
        </div>
    );
};

export default Allvisa;