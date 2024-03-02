import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Tooltip} from "@material-tailwind/react";
import { useContextData } from '../../../context/DataContext';
import { useUserData } from '../../../context/UserContext';
import MyListings from './cards/MyListings';
import ConfirmDelete from './cards/ConfirmDelete';

const Right = () => {
  
  const {gpData} = useContextData()
  const {userData, userDataLoading} = useUserData()
  const [myListings, setMyListings] = useState([]);

  useEffect(() => {
    if (userData && userData.length > 0 && gpData) {
      const filter = gpData.filter((list) => list.authInfo && list.authInfo.userId === userData[0]?.authInfo?.userId);
      setMyListings(filter);
      console.log(userData[0]?.authInfo?.userId);
    }
  }, []);
  
  

  return (
    <div className='px-5'>
      <div className='flex justify-between w-full p-5' >
        <h4 className='border-b-4 border-red font-semibold'>My Listings</h4>
      </div>

      <div>
        {
          myListings && myListings.map((list)=>(
            <MyListings key={list.id} property={list}/>
          ))
        }
      
      </div>
      
    </div>

  )
}

export default Right