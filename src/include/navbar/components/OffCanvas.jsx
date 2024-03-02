import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 
import { Drawer, Typography, IconButton, Tooltip, Button, Avatar} from "@material-tailwind/react";
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';

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
<div className="mb-6 flex items-center justify-between">
<div className='flex align-center'>
  {user && user.photoURL && (
      <Avatar src={user.photoURL} withBorder={true} color="green" />
    )}
    <div className='grid'>
    <h2 className='ml-2 font-medium text-lg'>
        {user ? user.displayName : (<span>Welcome to <span className='text-red'>GoodPlots</span></span>)}
      </h2>
      {user ? (<p className='text-red text-base font-semibold ml-2 -mt-2'>Broker</p>) : ""}
    
    </div>
    
  </div>
  <IconButton
    variant="text"
    color="blue-gray"
    onClick={closeDrawerRight}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </IconButton>
</div>
<div className='block'>

{
    isAuth ? (<></>) :
  (<><div className='flex align-middle py-3 duration-300 hover:border-b-4 border-red'>
    <a href="/login" className='flex'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
      
        <Typography color="gray" className="font-normal">Login</Typography>
      </a>
  </div></> )
  }

  {
      isAuth ? "" :
      <div className='flex align-middle py-3 duration-300 hover:border-b-4 border-red'>
      <a href="/register" className='flex '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
        </svg>
        <Typography color="gray" className="font-normal">Register</Typography></a>
      </div>
  }

{
  isAuth ? 
  <div className='block align-middle py-3 duration-300 hover:border-b-4 border-red'>
    <a href="/residentialform" className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>

    <p color="gray" className="font-semibold underline decoration-red underline-offset-4 ">Publish a property</p></a>
    <div className='block'>
          <a href="/explore/residentialbuy"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>Residential Buy</p></a>
          </div>
  </div>
  : ""
}

<div className='py-10'>
    <div className='flex gap-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
<p className='font-semibold underline decoration-red underline-offset-4 '>LISTINGS</p>
    </div>
    
<a href="/explore/alllistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>All Listings</p></a>
<a href="/explore/mylistings"><p className='m-1 p-1 text-left text-black hover:underline underline-offset-4 decoration-2 decoration-red'>My Listings</p></a>
</div>


{
  isAuth ? 
  <div className='absolute bottom-10'>
      <div className='flex align-middle py-3 duration-300 hover:border-b-4 border-red'>
        <a href="/explore/profile" className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <Typography color="gray" className="font-normal">Profile</Typography></a>
      </div>

      <div className='flex align-middle py-3 duration-300 hover:border-b-4 border-red'>
    <a href="/login" className='flex' onClick={handleLogout}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
    <Typography color="gray" className="font-normal">Logout</Typography></a>
    </div>
  </div>
  
  : ""
}

</div> 


</Drawer>
</React.Fragment>


</div>
  )
}

export default OffCanvas