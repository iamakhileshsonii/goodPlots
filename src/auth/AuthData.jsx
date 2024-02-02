import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// Declare propertyData outside the component so it can be exported
let propertyData = [];

const AuthData = () => {
    
    // Fetch and store properties listings
    const [dataLoaded, setDataLoaded] = useState(false);  
    const getData = async () => {
        const result = await getDocs(collection(db, 'gp_properties'));
        propertyData = result.docs.map((document) => (
            { ...document.data(), id: document.id }
        ));
        setDataLoaded(true); // Set data loaded flag once data is fetched
    }

    useEffect(() => {
        getData(); // Fetch data when component mounts
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>{dataLoaded ? 'Data Loaded' : 'Loading...'}</div>
    );
}

export default AuthData;
export { propertyData };
