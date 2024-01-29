import React, { useEffect, useState } from 'react';
import Listings from './listings';
import { auth, db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Left = () => {

  const [authInfo, setAuthInfo] = useState({
    userName: '',
    userDp: '',
    userEmail: ''
  });

  useEffect(() => {
    // Update authInfo when user information is available
    if (auth.currentUser) {
      setAuthInfo({
        userName: auth.currentUser.displayName,
        userDp: auth.currentUser.photoURL,
        userEmail: auth.currentUser.email
      });
    }
  }, [auth.currentUser]);

  const [gp_feed, setGpFeed] = useState([]);
  const postsRef = collection(db, "gp_feed");

    useEffect(() => {
        async function get_current_user_feed() {
            const data = await getDocs(postsRef);
            const transformedData = data.docs.map((document) => (
                { ...document.data(), id: document.id }
            ));
            setGpFeed(transformedData);
        }

        get_current_user_feed();
    }, []);

  
  return (
    <>
        <div className='block justify-evenly'>
            <div className='flex w-full justify-center'>
                <img src={authInfo.userDp} className='rounded h-12 w-12 rounded-full self-center'/>   
                <h2 className='text-left font-semibold text-xl px-2 self-center'>{authInfo.userName}</h2>
            </div>
            
            
            <div className='block py-5' >     
                <div className='flex w-full justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                  <span>{authInfo.userEmail}</span>
                </div>

                <div className='flex w-full justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                  <span>9999999999</span>
                </div>

            </div>
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
