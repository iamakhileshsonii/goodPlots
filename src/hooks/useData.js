import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const useData = () => {
    const [gpData, setGpData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initialize loading state

    const docRef = collection(db, 'gp_properties');

    useEffect(() => {
        async function fetchProperties() {
            try {
                const data = await getDocs(docRef);
                setGpData(data.docs.map((document) => ({
                    ...document.data(),
                    id: document.id
                })));
                setIsLoading(false); // Set loading state to false after data is fetched
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false); // Set loading state to false in case of error
            }
        }
        fetchProperties();
    }, []);

    // Returning the data and loading state from the hook
    return { gpData, isLoading };
}

export default useData;
