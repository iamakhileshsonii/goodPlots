import React, { useState } from 'react';
import { useContextData } from '../../context/DataContext';
import { useUserData } from '../../context/UserContext';
import ListingCards from '../home/components/cards/ListingCards';


const AllListings = () => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth')) || false;
    const { gpData, isLoading } = useContextData();
    const { userData } = useUserData();
    const [filterProp, setFilterProp] = useState('');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const filterListings = gpData.filter(list => {
        const notListedByCurrentUser = list.authInfo.userId !== userData?.authInfo?.userId;
        const isPublished = list.feedDetails.status === "published";
        const matchesFilter = !filterProp || list.propertyDetail.type === filterProp;
      
        return notListedByCurrentUser && isPublished && matchesFilter;
    });

    const displayMessage = () => {
        if (filterListings.length === 0) {
            // const category = filterProp ? filterProp.replace("Buy", "").trim() : "selected category";
            const category = filterProp ? filterProp : "selected category";
            return `0 Listings Available in ${category}`;
        } else {
            const category = filterProp ? filterProp : "All Categories";
            return `${filterListings.length} Listings Available in ${category}`;
        }
    };

    return (
        <div>
            <div className='flex justify-between w-full p-5'>
                <h4 className='border-b-4 border-red font-semibold'>All Listings</h4>
                <select name="Filter" id="Filter" className='bg-red border border-red rounded-md text-white' onChange={(e) => setFilterProp(e.target.value)}>
                    <option value="">All</option> {/* This ensures the user can select "All" to reset or show all */}
                    <option value="Residential Buy">Residential Buy</option>
                    <option value="Commercial Buy">Commercial Buy</option>
                    <option value="Industrial Buy">Industrial Buy</option>
                    <option value="Agriculture Buy">Agriculture Buy</option>
                    <option value="Residential Rent">Residential Rent</option>
                    <option value="Commercial Rent">Commercial Rent</option>
                    <option value="Industrial Rent">Industrial Rent</option>
                    <option value="Agriculture Rent">Agriculture Rent</option>
                </select>
            </div>



            <div>
                <p className='font-semibold underline decoration-red underline-offset-4 decoration-3 py-5'>{displayMessage()}</p>
                {filterListings.map((property) => (
                    <ListingCards prop={property} propid={property.id} key={property.id} />
                ))}
            </div>
        </div>
    );
}

export default AllListings;
