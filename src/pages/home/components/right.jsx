import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Tooltip} from "@material-tailwind/react";
import { useContextData } from '../../../context/DataContext';
import { useUserData } from '../../../context/UserContext';
import MyListings from './cards/MyListings';
import ConfirmDelete from './cards/ConfirmDelete';
import ShortList from './cards/ShortList';
import dummyLogo from '../../../assets/images/property_1.jpeg'

const Right = () => {
  const [authUser] = useState(JSON.parse(localStorage.getItem('isAuth')) || false)

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

    <>
    
    {
      authUser ?
      <div className='px-1'>
      <div className='flex justify-between w-full pt-5' >
        <h4 className='border-b-4 border-red font-semibold'>My Listings</h4>
      </div>

      <div>
        {
          myListings && myListings.map((list)=>(
            <MyListings key={list.id} property={list}/>
          ))
        }
      
      </div>


      <div className='flex justify-between w-full pt-5' >
        <h4 className='border-b-4 border-red font-semibold'>Shortlisted</h4>
      </div>

      <div>
        {
          myListings && myListings.map((list)=>(
            <ShortList key={list.id} property={list}/>
          ))
        }
      
      </div>
      
    </div>
    :

    <div className='p-5'>  
    <div className='py-5'>
      <h4 className='border-b-4 border-red font-semibold'>Shortlisted</h4>
      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      
    </div>
    <div className='py-5'>
      <h4 className='border-b-4 border-red font-semibold'>Liked</h4>
      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      <div className='flex border border-bordercolor p-2 rounded-md m-2'>
        <div className='w-5/12'><img src={dummyLogo} className='w-full h-16 object-cover rounded-md' /></div>
        <div className='w-7/12'>
          <h4 className='font-semibold text-xs px-2'>Property Title - Lorem, ipsum.</h4>
          <p className='italic text-xs px-2'>Chandigarh</p>
        </div>
      </div>

      
    </div>
    </div>
    }
    </>
   

  )
}

export default Right