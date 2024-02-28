import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextData } from '../../../context/DataContext';
import { useUserData } from '../../../context/UserContext';
import ListingTypes from '../../../component/homeComponents/listingTypes';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



const Left = ({authInfo}) => {
const { gpData, isLoading } = useContextData();
const {userData} = useUserData();

// Pending Listings
const pendingListings = gpData.filter((list)=> list.feedDetails.status == "pending");
const [fetchingCurrentUser, setfetchingCurrentUser] = useState(false)

const [brokerDash, setBrokerDash] = useState(false); // Checking current user profile (Broker --- Buyer/Seller)

useEffect(()=>{
if(userData[0]?.userRole === "broker"){
  setBrokerDash(true)
}else{
  setBrokerDash(false)
}
},[])

const [open, setOpen] = React.useState(1);
 
const handleOpen = (value) => setOpen(open === value ? 0 : value);



return (
  <>
    <div className='block justify-evenly'>

      <div className='flex gap-2 w-full justify-left '>
            <img src={userData[0]?.userDp || ""} className='h-12 w-12 rounded-full self-center'/>   
              <div className='block text-left'>
              <h2 className='text-left font-semibold text-xl px-2 self-center'>{userData[0]?.userName} </h2>
              <span className='text-left text-lg my-0 py-0 font-semibold text-red px-2'>{userData[0]?.userRole}</span>
              </div>    
        </div>
        
        
        <div className='flex flex-wrap gap-2 py-5' >     
            <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
              <span>{userData[0]?.userName}</span>
            </div>

            <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

              <span>{userData[0]?.userPhone}</span>
            </div>

            <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>



              <span>{userData[0]?.userEmail}</span>
            </div>

            <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>



              <span>{userData[0]?.userCity}</span>
            </div>



        </div>
    
    </div>

    <div className='block px-5 border border-bordercolor rounded-md'>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-lg font-semibold text-black hover:text-red'>List a property</AccordionHeader>
        <AccordionBody>
          <div className='block'>
          <Link to="/residentialbuy"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Buy</p></Link>
        <Link to="/residentialform"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Rent</p></Link>
        <Link to="/"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Commercial Buy</p></Link>
        <Link to="/"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Commercial Rent</p></Link>
          </div>
        
        </AccordionBody>
      </Accordion>
      {
        brokerDash ? 
        <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className='text-lg font-semibold text-black hover:text-red'>Listings</AccordionHeader>
        <AccordionBody>
          <div className='block'>
          <ListingTypes/>
          </div>
        
        </AccordionBody>
      </Accordion> : ""
      }
</div>
  </>
)};

export default Left;
