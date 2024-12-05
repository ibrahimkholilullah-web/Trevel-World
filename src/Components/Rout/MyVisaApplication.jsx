import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyVisaCard from './MyVisaCard';

const MyVisaApplication = () => {
    const data = useLoaderData()
    const [myvisa, setMyvisa] = useState(data)
    const [search, setSecrch] =  useState('')
    useEffect(()=>{
        fetch(`http://localhost:4500/myvisa?searchParams=${search}`)
        .then(res => res.json())
        .then((data) => {
            setMyvisa(data)
        })
    },[search])
    return (
        <div className='py-4'> 
        <div className='flex justify-between items-center my-2'>
            <div></div>
            <div>
            <label className="input input-bordered flex items-center gap-2 mr-4">
             <input 
             onChange={(e) => setSecrch(e.target.value)}
             type="text" className="grow" placeholder="Search" />
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 16 16"
               fill="currentColor"
               className="h-4 w-4 opacity-70">
               <path
                 fillRule="evenodd"
                 d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                 clipRule="evenodd" />
             </svg>
       </label>  
            </div>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    myvisa.map(visa => <MyVisaCard myvisa={myvisa} setMyvisa={setMyvisa} key={visa._id} visa={visa}></MyVisaCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplication;