import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Button } from "@material-tailwind/react";


const logoutHook = () => {

    function handleLogout(){
        signOut(auth);
        localStorage.setItem("isAuth", false);
    }

  return (
    <>
    <Button onClick={handleLogout}>Button</Button>
    </>
    
  )
}

export default logoutHook