import React, { useState, useEffect } from 'react';
import { useUserData } from '../../context/UserContext';
import ListingTypes from '../homeComponents/listingTypes';
const Testpage = () => {
  const {userData} = useUserData(); 
  return (
    <div>
    {
      userData.map((logUser) => (
          <div key={logUser.id}>
            <div className='m-5 p-4 border border-bordercolor rounded-lg block'>
              <h2 className='font-semibold text-xl text-center'>LOGGED USER DETAILS</h2>
                <div className='grid justify-center p-5'>
                  <h6>Username: {logUser?.userName}</h6>
                  <h6>UserId: {logUser?.authInfo?.userId}</h6>
                  <h6>City: {logUser?.userCity}</h6>
                  <h6>Role: {logUser?.userRole}</h6>
                  <h6>Email: {logUser?.userEmail}</h6>

                </div>
            
            </div>
            
          </div>
        ))
    }

    <div>
      <ListingTypes/>
    </div>
    </div>
  );
};

export default Testpage;