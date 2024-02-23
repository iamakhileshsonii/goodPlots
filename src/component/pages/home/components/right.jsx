import React, { useEffect, useState } from 'react';
import { auth, db } from '../../../../firebase';
import { collection, deleteDoc, documentId, getDocs } from 'firebase/firestore';
import UserListings from '../../../card/UserListings';
import { Link } from 'react-router-dom';
import {  Tooltip} from "@material-tailwind/react";
import useData from '../../../../hooks/useData';

const Right = () => {

  const {gpData, Loading} = useData();
  const [mylistings, setMyListings] = useState([]);
  const postRef = collection(db, 'gp_properties');
  
  const [currentAuthId, setCurrentAuthId] = useState();

  
  useEffect(()=>{
    async function fetchmylistings(){
      const data = await getDocs(postRef);
      setMyListings(data.docs.map((document)=>({
        ...document.data(),
        id: document.id
      })))
    }
    fetchmylistings()
  }, [])

  useEffect(()=>{
    function fetchAuthId(){
      if(auth.currentUser){
        setCurrentAuthId(auth.currentUser.uid);
      }
    }
    fetchAuthId();

  },[])


  // Filter listings of current loggedIn user only
  const currentUserListing = mylistings.filter(
    (listing)=> listing.authInfo.userId === currentAuthId
    )

  return (
    <div className='px-5'>
      <div className='flex justify-between w-full p-5' >
        <h4 className='border-b-4 border-red font-semibold'>My Listings</h4>

        <Tooltip content="Manage Listings" placement="bottom">
          <Link to="/mylistings">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          </Link>
        </Tooltip>
        
      </div>
      {
        currentUserListing.map((list, index)=>(
          <UserListings myproperty={list} key={index}  />
        ))
      }
      
    </div>

  )
}

export default Right