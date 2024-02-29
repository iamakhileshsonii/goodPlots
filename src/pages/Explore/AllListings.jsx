import React from 'react';
import { useContextData } from '../../context/DataContext';
import { useUserData } from '../../context/UserContext';
import ListingCards from '../home/components/cards/ListingCards';

const AllListings = () => {
    const {gpData, isLoading} = useContextData();
    const {userData} = useUserData();
  
    // Display loading text while data is being fetched
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    // Filter listings which are not listed by current user
    const filterListings = gpData.filter(
      (list) => list.authInfo.userId !== userData?.authInfo?.userId && list.feedDetails.status === "published"
    );
  
  return (
    <div>
    <div className='grid justify-center w-full p-5'>
      <h4 className='border-b-4 border-red font-semibold'>All Listings</h4>
    </div>

    <div>
    {filterListings.map((property) => (
      
      <ListingCards prop={property} propid={property.id}  key={property.id} />
  
  ))}
    </div>

  </div>
  )
}

export default AllListings