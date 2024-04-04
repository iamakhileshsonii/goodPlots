import React, { useState, useEffect } from 'react';
import { useUserData } from '../../../../../context/UserContext';

const City = () => {
  // Consuming userData from UserContext
  const { userData } = useUserData();
  console.log(userData);

  // Accessing userCity from the first user in userData (if it exists)
  const userCity = userData[0]?.userCity;

  // Initialize filterCity with userCity
  const [filterCity, setFilterCity] = useState(userCity || '');

  // Update filterCity if userData changes
  useEffect(() => {
    // Update filterCity only if userCity is different from the current value
    if (userCity !== filterCity) {
      setFilterCity(userCity || '');
    }
  }, [userCity]);

  return (
    <div className='grid flex-wrap px-20'>
      <h4 className='font-semibold text-center'>Select city</h4>
      <form className='flex justify-between border border-bordercolor px-2 rounded-md'>
        {/* Displaying userCity in the input field */}
        <input type="text" value={filterCity} className='focus:outline-none text-black' onChange={(e)=>setFilterCity(e.target.value)} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </form>
    </div>
  );
};

export default City;
