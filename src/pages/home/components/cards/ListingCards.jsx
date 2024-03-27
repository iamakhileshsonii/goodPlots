import React, { useState } from 'react';
import {auth, db} from '../../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-tailwind/react';
import { useUserData } from '../../../../context/UserContext';
import ScheduleAppointment from './ScheduleAppointment';

const ListingCards = ({prop, propid}) => {

  const isAuth = JSON.parse(localStorage.getItem('isAuth')) || false

  const{userData} = useUserData();

  const {propertyDetail, authInfo, property, feedDetails}  = prop
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

  // Format the timestamp to display the date
const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(); // Adjust date format as per your requirement
};

//Handle Shortlist
const handleShortlist = ()=>{
  console.log("List Shortlisted", prop.id)
}

const loginToUseFeature = ()=>{
  alert("Login to use feature")
}

  return (
    <div className=' flex border border-bordercolor rounded-lg text-left p-3 my-2'>
      <div className='w-2/5 sm:w-1/4  block p-2'>
        <img src={propertyDetail.featureImg} className='sm:h-52 w-full rounded-md'/>           
              <div className='flex justify-evenly mt-6'>
                 <div>
                      {
                        isLike ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red" onClick={isAuth ? handleLike : loginToUseFeature}>
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>

                        :
                        <Tooltip content="Like" placement="top">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={isAuth ? handleLike : loginToUseFeature}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg></Tooltip>
                      }
                    </div>

                    <div>
                      {bookmark ?
                      <Tooltip content="Shortlist" placement="top">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={isAuth ? handleBookmark : loginToUseFeature }>
  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
</svg>
</Tooltip>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={isAuth ? handleBookmark : loginToUseFeature }>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                      }
                    </div>

                    </div>


      </div>

    <div className='w-3/5 sm:w-3/4  block'>
      <div className='block'>
      <h6 className='text-sm sm:text-xl font-semibold '>{propertyDetail.title}</h6>
        <div className='flex justify-between'>
        <p className='rounded p-1 my-2 text-xs'>{propertyDetail.property_subtype}</p>
        
        <div className='flex gap-1 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 items-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p className='text-xs self-center'>{propertyDetail.city}</p>
        </div>
        
        </div>

        <div>
          <p className='py-2 text-lightText'>{propertyDetail.desc.substring(0, 140)}...More</p>
        </div>

        <div className='flex gap-4'>
          <p className='text-red font-bold'>${propertyDetail.expected_price}</p>
          <p>Commission: 5%</p>
        </div>

        <div className='flex gap-3 pt-2'>
          <p className='text-xs'>Carpet Area: 1400 Sq.Ft.</p>
          <p className='text-xs'>Super Area: 1200 Sq.Ft.</p>
          <p className='text-xs'>Floors: 1200 Sq.Ft.</p>
        </div>

        <div className='flex gap-4 pt-5'>
          <p className='text-lightText text-xs'>Posted by: {authInfo.userName}</p>
          <p className='text-lightText text-xs'>Posted on: {formatDate(feedDetails?.publishedOn.toDate())}</p>
        </div>

        <div className='flex justify-between mt-6'>
          <div className='flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={loginToUseFeature}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={isAuth ? loginToUseFeature : loginToUseFeature}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>

          {/* <Tooltip content="Book Appointment" placement="top">
                     <ScheduleAppointment listing= {prop}/>
                     </Tooltip> */}

          {
            isAuth ? 
            <Tooltip content="Book Appointment" placement="top">
                     <ScheduleAppointment listing= {prop}/>
            </Tooltip> : 

            <Tooltip content="Book Appointment" placement="top">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" onClick={loginToUseFeature}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
            </Tooltip>

          }

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
        
    </div>
  )
}

export default ListingCards