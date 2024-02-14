import React, { useState, useEffect } from 'react';
import useLoggedUser from '../../hooks/useLoggedUser';

const Testpage = () => {
  const {filterLogUser} = useLoggedUser();

  return (
    <div>
    {
      filterLogUser.map((user) => (
          <div key={user.id}>
            <div className='m-5 p-4 border border-bordercolor rounded-lg block'>
              <h2 className='font-semibold text-xl text-center'>LOGGED USER DETAILS</h2>
                <div className='grid justify-center p-5'>
                  <h6>Username: {user.userName}</h6>
                  <p>User Id: {user.authInfo.userId}</p>
                  <p>Role: {user.userRole}</p>
                  <p>City: {user.userCity}</p>
                  <p>Gender: {user.userGender}</p>
                  
                </div>
            
            </div>
            
          </div>
        ))
    }
    </div>
  );
};

export default Testpage;