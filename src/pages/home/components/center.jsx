import React, { useEffect, useState } from 'react';
import { auth } from "../../../firebase";
import ListingCards from '../../../component/card/ListingCards';
import { useContextData } from '../../../context/DataContext';
import { useUserData } from '../../../context/UserContext';


const Center = () => {
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
    <>
      <div>
        <div className='grid justify-center w-full p-5'>
          <h4 className='border-b-4 border-red font-semibold'>All Listings</h4>
        </div>

        {filterListings.map((property) => (
          
            <ListingCards prop={property} propid={property.id}  key={property.id} />
        
        ))}
      </div>
    </>
  );
}

export default Center;
