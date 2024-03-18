import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 
import { Drawer, Typography, IconButton, Tooltip, Button, Avatar, Accordion,
  AccordionHeader,
  AccordionBody,} from "@material-tailwind/react";
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import Left from '../../../pages/home/components/left';
import dummyLogo from '../../../assets/images/avatar.jpeg'


const OffCanvas = () => {

    const[isAuth, setIsAuth] = useState( JSON.parse(localStorage.getItem("isAuth")) || false);
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
  
    function handleLogout() {
      signOut(auth)
      localStorage.setItem("isAuth", false)
      console.log(isAuth)
      setIsAuth(false)
    }
  
  
    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);

    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='flex justify-evenly w-1/3'>
    <React.Fragment>
<div className="flex flex-wrap gap-4">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={openDrawerRight} >
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>


</div>

<Drawer
placement="right"
open={openRight}
onClose={closeDrawerRight}
className="p-4"
>

<div className='text-right'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={closeDrawerRight}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

</div>

{
  isAuth ? <Left/> 
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
        <h4 className='text-white text-center'>Login to use feature</h4>
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



</Drawer>
</React.Fragment>


</div>
  )
}

export default OffCanvas