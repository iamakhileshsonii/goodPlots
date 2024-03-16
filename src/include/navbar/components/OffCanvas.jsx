import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 
import { Drawer, Typography, IconButton, Tooltip, Button, Avatar} from "@material-tailwind/react";
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import Left from '../../../pages/home/components/left';

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




</Drawer>
</React.Fragment>


</div>
  )
}

export default OffCanvas