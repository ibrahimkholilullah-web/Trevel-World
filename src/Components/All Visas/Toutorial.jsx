// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import MyAddAllVisa from '../Rout/MyaddAllVisa';
// import TouristCard from './TouristCard';

// const Toutorial = () => {
//     const loadCategory = useLoaderData()
//     const touristVisa = "Tourist Visa"
//     // const [touristVisa, setTouristVisa] = useState('Tourist Visa')
//     const [visas, setVisas] = useState(filteredVisa)
//     const filteredVisa = touristVisa === 'Tourist Visa' && loadCategory.filter((visa)=> visa.visaType === touristVisa)
//     console.log(filteredVisa)
//     return (
//         <div>
            
//             {
//                 filteredVisa.map(visa => (
//                     <TouristCard key={visa._id} ></TouristCard>                   
//                 ))
//             }
            
//         </div>
//     );
// };

// export default Toutorial;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from './TouristCard';

const Toutorial = () => {
    const loadCategory = useLoaderData();
    const touristVisa = "Tourist Visa";

    // Filter visas based on type
    const filteredVisa = loadCategory.filter((visa) => visa.visaType === touristVisa);

    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-[] my-3'>Tourist Visa</h1>

            <TouristCard filteredVisa={filteredVisa}></TouristCard>
        </div>
    );
};

export default Toutorial;
