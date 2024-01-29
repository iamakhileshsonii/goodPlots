import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import google from '../assets/logo/google.png';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Googleauth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  
  async function handleLogin() {
    await signInWithPopup(auth, provider)
    setIsAuth(true)
    localStorage.setItem("isAuth", true)
    navigate('/setupprofile')
  }

  async function handleLogout() {
    await signOut(auth)
    setIsAuth(false)
    navigate('/')
  }


  return (
    <>
      <Button className="mt-6 flex justify-evenly items-center px-20" fullWidth onClick={handleLogin}>
        <img src={google} alt="" className="h-6 w-6" />
        Login with Google
      </Button>
    </>
  );
};

export default Googleauth;
