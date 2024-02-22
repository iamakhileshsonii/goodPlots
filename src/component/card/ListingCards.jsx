import React, { useState } from 'react';
import {auth, db} from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-tailwind/react';
import { useUserData } from '../../context/UserContext';

const ListingCards = ({prop, propid}) => {
  const{userData} = useUserData();

  const {propertyDetail, authInfo, property}  = prop
  // Accessing property ID
  const propertyId = prop.id;

  const likeRef = collection(db, 'gp_likes'); // Set likeRef for Likes Documents
  
  const [isLike, setIsLike] = useState(false); // Set like button state - Initially False
  const [bookmark, setBookmark] = useState(false); // Set like button state - Initially False


  
  const handleLike = ()=>{
    setIsLike(!isLike);
    controlLikes();
  }

  async function controlLikes() {
    console.log(isLike ? `Disliked by: ${propertyId}` : `Liked by: ${propertyId}`);
    
  }
  


  const handleBookmark= ()=>{
    setBookmark(!bookmark)
  }

  return (
    <div className='border border-bordercolor rounded-lg text-left p-3 my-2'>
        <h6 className='font-semibold text-xl'>{propertyDetail.title}</h6>
        <p className='text-xs'>{propertyDetail.desc}</p>
        
        <div className='flex gap-2'>
        <p className='rounded p-1 my-2 border border-bordercolor text-xs'>{propertyDetail.property_subtype}</p>
            <div className='flex px-2 rounded p-1 my-2 border border-bordercolor text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <p className='text-xs self-center italic'>{userData[0]?.userName}</p>
            </div>

            <div className='flex px-2 rounded p-1 my-2 border border-bordercolor text-xs'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                  <p className='text-xs self-center italic'>{propertyDetail.city}</p>
              </div>
        
        </div>

        <div className='flex py-4'>
            

            <div className='flex px-2 justify-between w-full'>
              

              <div className='flex gap-4'>
                      <div>
                        {
                          isLike ? 
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red" onClick={handleLike}>
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>

                          :
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={handleLike}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        }
                      </div>

                      <div>
                        {bookmark ?
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={handleBookmark}>
                          <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={handleBookmark}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                      </svg>

                        
                        }
                      </div>

                      
                        <div><Tooltip content="Book Appointment" placement="top">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg></Tooltip>
                        </div>
                      
              </div>

            

              <div>
                <Tooltip content="View Listing" placement="top">
              <Link to={`/property/${propertyId}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
              </svg>
              </Link>
              </Tooltip>
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default ListingCards