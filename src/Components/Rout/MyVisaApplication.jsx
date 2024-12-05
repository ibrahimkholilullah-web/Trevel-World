import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyVisaCard from './MyVisaCard';

const MyVisaApplication = () => {
    const data = useLoaderData()
    const [myvisa, setMyvisa] = useState(data)
    console.log(data)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    myvisa.map(visa => <MyVisaCard myvisa={myvisa} setMyvisa={setMyvisa} key={visa._id} visa={visa}></MyVisaCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplication;