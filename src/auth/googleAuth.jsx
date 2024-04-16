import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import google from '../assets/logo/google.png';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useUserData } from '../context/UserContext';

const Googleauth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { userData, userDataLoading } = useUserData();

  // useEffect(() => {
  //   if (!userDataLoading && userData.length > 0) {
  //     const userId = auth.currentUser ? auth.currentUser.uid : null;
  //     const user = userData[0];

  //     // Check if the user is logged in and the user ID matches
  //     if (userId && user && userId === user.authInfo.userId) {
  //       navigate('/explore/alllistings');
  //     } else {
  //       navigate('/setupprofile');
  //     }
  //   }
  // }, [userData, userDataLoading, navigate]);

  async function handleLogin() {
    try {
      await signInWithPopup(auth, provider);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate('/explore/alllistings')
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      setIsAuth(false);
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout error
    }
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
