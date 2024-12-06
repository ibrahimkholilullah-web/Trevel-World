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
