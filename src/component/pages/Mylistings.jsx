import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import UserMyListings from '../card/User/UserMyListings';
import { useContextData } from '../../context/DataContext';
import { useUserData } from '../../context/UserContext';

const Mylistings = () => {

    const docRef = collection(db, 'gp_properties');
    const [currentUser, setCurrentUser] = useState(null);

    const [myListings, setMyListings] = useState([]);

    // Get all document 
    const {gpData} = useContextData();

    // Get logged user data
    const {userData} = useUserData();

    useEffect(() => {
        const fetchMyListings = async () => {
            try {
                const filteredListings = gpData.filter(
                    (list)=> list.authInfo.userId == userData[0].authInfo.userId
                );
                
                setMyListings(filteredListings);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };
    
        fetchMyListings();
    }, [gpData, userData]);

    console.log(gpData)
    console.log(userData)
    return (
        <div className='p-20'>
            <div className='p-10'>
                <h2 className='text-center font-semibold text-2xl underline decoration-solid decoration-red underline-offset-8 decoration-4'>My Listings</h2>
            </div>

            {myListings.length === 0 ? (
                <p>No Listings available</p>
            ) : (
                myListings.map(list => (
                    <UserMyListings list={list} id={list.id} key={list.id} />
                ))
            )}
        </div>
    );
};

export default Mylistings;
