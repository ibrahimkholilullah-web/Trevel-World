import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddAllVisa from './MyaddAllVisa';

const MyAddedVisas = () => {
    const loaddata = useLoaderData()
    const [visas , setVisas] = useState(loaddata)

    return (
        <div>
            <h1>all visa</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    visas.map((visa) => <MyAddAllVisa key={visa._id} setVisas={setVisas} visas={visas} visa={visa}></MyAddAllVisa>)
                }
            </div>
        </div>
    );
};

export default MyAddedVisas;