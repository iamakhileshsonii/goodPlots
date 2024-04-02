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
import dummyLogo from '../../../assets/images/avatar.jpeg';



const Left = ({authInfo}) => {

  const [authUser] = useState(JSON.parse(localStorage.getItem('isAuth')) || false)

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
  {
    authUser ?  
    <div>
    <div className='block justify-evenly'>   
      <div className='flex gap-2 w-full justify-left mb-10'>
            <img src={userData[0]?.userDp || ""} className='h-12 w-12 rounded-full self-center'/>   
              <div className='block text-left'>
              <h2 className='text-left font-semibold text-xl px-2 self-center'>{userData[0]?.userName} </h2>
              <div className='flex align-center'><span className='text-left text-lg my-0 py-0 font-semibold text-red px-2'>{userData[0]?.userRole}</span>
              <p className='italic text-xs self-center'>{userData[0]?.userCity}</p></div>
              </div>    
        </div>
    </div>

    <div className='block px-5 border border-bordercolor rounded-md'>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>List a property</AccordionHeader>
        <AccordionBody>
          <div className='block'>
          <Link to="/explore/residentialbuy"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Buy</p></Link>
        <Link to="/explore/residentialrent"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Rent</p></Link>
        <Link to="/explore/commercialbuy"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Commercial Buy</p></Link>
        <Link to="/explore/commercialrent"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Commercial Rent</p></Link>
          </div>
        
        </AccordionBody>
      </Accordion>
      {
        brokerDash ? 
        <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Listings</AccordionHeader>
        <AccordionBody>
        <Link to="/explore/listingtypes"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Listing Types</p></Link>
        </AccordionBody>
      </Accordion> : ""
      }

<Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Personal</AccordionHeader>
        <AccordionBody>
          <div className='block'>
          <Link to="/explore/appointments"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Appointments</p></Link>
          </div>
        
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Explore</AccordionHeader>
        <AccordionBody>
          <div className='block'>
          <Link to="/explore/alllistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>All Listings</p></Link>
          </div>
        
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Settings</AccordionHeader>
        <AccordionBody>
          <div className='block'>
          <Link to="/explore/profile"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Profile</p></Link>
          </div>
        
        </AccordionBody>
      </Accordion>
    </div>
    </div>
  :
    <div>
      <div className='block justify-evenly'>
        <div className='flex gap-2 w-full justify-left mb-10'>
            <img src={dummyLogo} className='h-12 w-12 rounded-full self-center'/>   
            <div className='block text-left'>
              <h2 className='text-left font-semibold text-xl px-2 self-center'>Username</h2>
              <span className='text-left text-lg my-0 py-0 font-semibold text-red px-2'>Role</span>
            </div>    
        </div>
      </div>

      <div className='bg-red rounded-md my-2'>
        <h4 className='font-semibold text-white'>Login to use feature</h4>
      </div>
      <div className='block px-5 border border-bordercolor rounded-md bg-bordercolor'>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>List a property</AccordionHeader>
          <AccordionBody>
            <div className='block'>
            <p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Buy</p>
          <p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Rent</p>
          <p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Commercial Buy</p>
          <p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Commercial Rent</p>
            </div>
          
          </AccordionBody>
        </Accordion>
        {
          brokerDash ? 
          <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Listings</AccordionHeader>
          <AccordionBody>
          <Link to="/explore/alllistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Listing Types</p></Link>
          </AccordionBody>
        </Accordion> : ""
        }

  <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Personal</AccordionHeader>
          <AccordionBody>
            <div className='block'>
            <Link to="/explore/alllistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Appointments</p></Link>
            </div>
          
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Explore</AccordionHeader>
          <AccordionBody>
            <div className='block'>
            <Link to="/explore/alllistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>All Listings</p></Link>
            </div>
          
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)} className='text-lg font-semibold text-black hover:text-red py-1 my-1'>Settings</AccordionHeader>
          <AccordionBody>
            <div className='block'>
            <Link to="/explore/alllistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Profile</p></Link>
            </div>
          
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  }


    
  </>
)};

export default Left;
