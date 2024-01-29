import React, { useEffect, useState } from 'react';
import Left from './left';
import Right from './right';
import Center from './center';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  const[loader, setLoader] = useState();
  let [loaderColor, setLoaderColor] = useState("#AD0000");

  useEffect(()=>{
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  },[])

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
    
      <div className='flex justify-evenly flex-wrap py-5 px-5 '>
        <div className='w-1/4 block text-center '><Left/></div>
        <div className='w-1/2 block text-center border-x border-bordercolor min-h-screen py-0 px-5'><Center/></div>
        <div className='w-1/4 block text-center' ><Right/></div>
    </div>
    
    }

    
    </>
  )
}

export default Home