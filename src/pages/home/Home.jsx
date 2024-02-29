import React, { useEffect, useState } from 'react';
import Left from './components/left';
import Right from './components/right';
import Center from './components/center';
import ClipLoader from "react-spinners/ClipLoader";
import { auth, db } from '../../firebase';

const Home = () => {

  const[loader, setLoader] = useState();
  let [loaderColor, setLoaderColor] = useState("#AD0000");

  useEffect(()=>{
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  },[])

  // Auth Info
  const [authInfo, setAuthInfo] = useState({
    userId:'',
    userName: '',
    userDp: '',
    userEmail: ''
  });

  useEffect(() => {
    // Update authInfo when user information is available
    if (auth.currentUser) {
      setAuthInfo({
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        userDp: auth.currentUser.photoURL,
        userEmail: auth.currentUser.email
      });
    }
  }, [auth.currentUser]);


  return (
    <>

    {
      loader ?  
      <div className="loader grid justify-center p-20">
        <ClipLoader
        color={loaderColor}
        loading={loader}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      
      
      :
    
      <div className='flex justify-evenly flex-wrap py-5 px-2 sm:px-5 '>
        <div className='w-full sm:w-1/5 block text-center'><Left authInfo={authInfo}/></div>
        <div className='w-full sm:w-4/5 block text-center min-h-screen py-0 px-0 sm:px-5'><Center authInfo={authInfo}/></div>
        {/* <div className='w-full sm:w-1/5 block text-center' ><Right/></div> */}
    </div>
    
    }

    
    </>
  )
}

export default Home