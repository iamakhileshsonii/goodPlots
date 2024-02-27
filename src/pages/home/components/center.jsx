import React, { useEffect, useState } from 'react';
import { auth } from "../../../firebase";
import ListingCards from '../../../component/card/ListingCards';
import useData from '../../../hooks/useData';


const Center = () => {
  const { gpData, isLoading } = useData();
  const [currentAuthId, setCurrentAuthId] = useState();

  // Fetch currently loggedIn user ID
  useEffect(() => {
    function fetchAuthId() {
      if (auth.currentUser) {
        setCurrentAuthId(auth.currentUser.uid);
      }
    }
    fetchAuthId();

  }, []);

  // Display loading text while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Filter listings which are not listed by current user
  const filterListings = gpData.filter(
    (list) => list.authInfo.userId !== currentAuthId
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
