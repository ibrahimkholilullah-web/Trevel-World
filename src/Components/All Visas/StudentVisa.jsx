import React from 'react';
import TouristCard from './TouristCard';
import { useLoaderData } from 'react-router-dom';

const StudentVisa = () => {
    const loadCategory = useLoaderData();
    const studentVisa = "Student Visa";
    console.log(loadCategory)



    const filteredVisa = loadCategory.filter((visa) => visa.visaType === studentVisa);
    console.log(filteredVisa)

    return (
        <div className='dark:bg-black p-4'>
            <h1 className='text-center text-2xl font-bold text-[] dark:my-0 dark:text-white my-3'>Student Visa</h1>

            <TouristCard filteredVisa={filteredVisa}></TouristCard>
        </div>
    );
};

export default StudentVisa;