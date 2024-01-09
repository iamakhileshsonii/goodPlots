import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import google from '../assets/logo/google.png';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Googleauth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  function handleLogin() {
    signInWithPopup(auth, provider)
        setIsAuth(true)
        localStorage.setItem("isAuth", true)
        console.log(isAuth)
        setRedirectToDashboard(true);
  }

  function handleLogout() {
    signOut(auth)
    console.log(isAuth)
    setIsAuth(false)
  }

  // Redirect to /dashboard if redirectToDashboard is true
  if (redirectToDashboard) {
    return <Navigate to="/usersettings" />;
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
