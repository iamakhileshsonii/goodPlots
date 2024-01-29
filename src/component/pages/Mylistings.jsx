import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import UserMyListings from '../card/User/UserMyListings';

const Mylistings = () => {
    const [myListings, setMyListings] = useState([]);
    const docRef = collection(db, 'gp_properties');
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchMyListings = async () => {
            try {
                if (auth.currentUser) {
                    const userId = auth.currentUser.uid;
                    setCurrentUser(userId);
                    const document = await getDocs(docRef);
                    setMyListings(document.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                }
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchMyListings();
    }, [myListings]);

    const filteredListings = myListings.filter(
        listing => listing.authInfo.userId === currentUser
    );

    return (
        <div className='p-20'>
            <div className='p-10'>
                <h2 className='text-center font-semibold text-2xl underline decoration-solid decoration-red underline-offset-8 decoration-4'>My Listings</h2>
            </div>

            {filteredListings.length === 0 ? (
                <p>No Listings available</p>
            ) : (
                filteredListings.map(list => (
                    <UserMyListings list={list} id={list.id} key={list.id} />
                ))
            )}
        </div>
    );
};

export default Mylistings;
