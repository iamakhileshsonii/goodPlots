import React, { useState, useEffect } from 'react';
import { Avatar } from "@material-tailwind/react";
import PageTitle from '../hooks/pageTitle';
import { db, auth } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';


const Dashboard = () => {

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
    
    PageTitle('Dashboard');
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))
    const[userRole, setUserRole]=useState("Broker");
    const[activeLink, setActiveLink]=useState(false);

  return (
    <div className='flex justify-center items-center'>

      <div className='flex justify-center rounded w-full p-10 m-5 border border-bordercolor'>
        
        <div className='block rounded w-3/12 bg-cardbg p-5 m-2'>
          
          <div className='flex align-center'>
          {user && user.photoURL && (
              <Avatar src={user.photoURL} withBorder={true} color="green" />
            )}
            <div className='grid'>
            <h2 className='ml-2 font-medium text-lg'>
                {user ? user.displayName : 'Guest'}
              </h2>
            <p className='text-red text-base font-semibold ml-2 -mt-2'>{userRole}</p>
            </div>
            
          </div>

          {/* Dashboard Tabs */}
        <div className='block p-5 rounded'>
            <div className='block bg-red text-white p-2 my-2 rounded'>Appointments today</div>
            <div className='block bg-black text-white p-2 my-2 rounded'>Schedule a visit</div>
            <div className='block bg-black text-white p-2 my-2 rounded'>Requests</div>
            <div className='block bg-black text-white p-2 my-2 rounded'>Prospects</div>
            <div className='block bg-black text-white p-2 my-2 rounded'>Calls</div>
        </div>

        </div>
        <div className='block rounded w-7/12 m-2 p-5 bg-cardbg'>
          Right Side Main Content
        </div>

        

        
      </div>
      
    </div>
  );
}

export default Dashboard;
