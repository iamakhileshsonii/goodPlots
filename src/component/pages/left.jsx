import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLoggedUser from '../../hooks/useLoggedUser';
import { Badge, Button } from "@material-tailwind/react";

const Left = ({authInfo}) => {

  const {userDp} = authInfo;



  // Current User Data
  const {filterLogUser} = useLoggedUser();
  const [fetchingUserData, setFetchingUserData] = useState(false)
  const currentUser = filterLogUser[0]
  
  return (
    <>
        <div className='block justify-evenly'>
          {
            fetchingUserData &&fetchingUserData ? <Link to='/setupprofile'><p className='m-2 py-1 px-2 rounded-md border border-bordercolor font-semibold '>Setup Profile</p></Link>
            :
            <>
          <div className='flex w-full justify-center '>
                <img src={userDp} className='h-12 w-12 rounded-full self-center'/>   
                  <div className='block text-left'>
                  <h2 className='text-left font-semibold text-xl px-2 self-center'>{currentUser?.userName} </h2>
                  <span className='text-left text-lg my-0 py-0 font-semibold text-red px-2'>{currentUser?.userRole}</span>
                  </div>    
            </div>
            
            
            <div className='flex flex-wrap gap-2 py-5' >     
                <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                  <span>{currentUser?.userName}</span>
                </div>

                <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                  <span>{currentUser?.userPhone}</span>
                </div>

                <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>


                  <span>{currentUser?.userRole}</span>
                </div>

                <div className='flex justify-center border border-bordercolor rounded-sm px-2 py-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>



                  <span>{currentUser?.userCity}</span>
                </div>


            </div>
          </>
          }
          
            
        </div>

        <div className='block'>
          <div className='flex border-b-4 border-red p-3 my-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <h4 className='text-lg font-semibold'>List a property</h4>
          </div>

          <div className='flex flex-wrap'>
            <Link to="/residentialbuy"><p className='m-1 p-1 rounded border border-bordercolor'>Residential Buy</p></Link>
            <Link to="/residentialform"><p className='m-1 p-1 rounded border border-bordercolor'>Residential Rent</p></Link>
            <Link to="/"><p className='m-1 p-1 rounded border border-bordercolor'>Commercial Buy</p></Link>
            <Link to="/"><p className='m-1 p-1 rounded border border-bordercolor'>Commercial Rent</p></Link>
          </div>
        </div>

      
        
      
    </>
  );
};

export default Left;
