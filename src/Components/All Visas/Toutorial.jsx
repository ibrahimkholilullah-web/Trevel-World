import { useLoaderData } from 'react-router-dom';
import TouristCard from './TouristCard';

const Toutorial = () => {
    const loadCategory = useLoaderData();
    const touristVisa = "Tourist Visa";

    // Filter visas based on type
    const filteredVisa = loadCategory.filter((visa) => visa.visaType === touristVisa);

    return (
        <div className='dark:bg-black p-4'>
            <h1 className='text-center text-2xl font-bold text-[] dark:my-0 dark:text-white my-3'>Tourist Visa</h1>

            <TouristCard filteredVisa={filteredVisa}></TouristCard>
        </div>
    );
};

export default Toutorial;
