import React, { useState, useEffect } from 'react';
import { Drawer, Typography, IconButton, Tooltip, Button, Avatar} from "@material-tailwind/react";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import logo from '../../assets/logo/Logo.png';
import OffCanvas from './components/OffCanvas';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const[isAuth, setIsAuth] = useState( JSON.parse(localStorage.getItem("isAuth")) || false);
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleLogout = ()=>{
    signOut(auth)
    localStorage.setItem("isAuth", false)
    setIsAuth(false)
    navigate('/login')

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
    <>
     <div className='flex justify-between w-full px-10 py-5 border-b border-bordercolor'> 
        <div className='w-2/12 grid justify-center'><a href="/"><img src={logo} alt="GoodPlots" className='w-48' /></a></div>
        <div className='flex items-center justify-evenly w-1/3'>
      

            <Tooltip content="Dashboard" placement="bottom">
            <a href="/explore/alllistings">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            </a>

            </Tooltip>

            {
              isAuth ? 
              <Tooltip content="Logout" placement="bottom">
            <p onClick={handleLogout}>Logout</p>
            </Tooltip>
            :
            <Tooltip content="Login" placement="bottom">
            <Link to="/login"><p>Login</p></Link>
            </Tooltip>


            }
            


        </div>

        <div className="block sm:hidden">    
            <OffCanvas /> 
        </div>
        


        
    </div>
    </>
   
  )
}

export default Navbar