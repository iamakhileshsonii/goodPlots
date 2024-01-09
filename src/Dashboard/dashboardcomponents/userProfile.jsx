import React, { useEffect, useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { auth } from "../../firebase";
import { Avatar } from "@material-tailwind/react";

const UserProfile = () => {
   
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
    
    <div className='block py-20 border border-bordercolor rounded '>  
        <div className='block p-10'>
            <div className='flex items-center'>
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
            <h2 className='font-semibold px-2'>Akhilesh Soni</h2>
            </div>


        </div>

        <div className="w-72">
            <Select color="red"  label="You are?" defaultValue="Broker">
            <Option >Buyer/Seller</Option>
            <Option>Broker</Option>
            
            </Select>
        </div>

        <div className="w-72 flex p-2">
            <h6 className='font-semibold'>Email: </h6>
            <p>{user ? user.email : 'No Email'}</p>
        </div>

        <div className="w-72 flex p-2">
            <h6 className='font-semibold'>Joined On: </h6>
            <p>{user ? user.metadata.creationTime : ""}</p>
        </div>



    </div>
  )
}

export default UserProfile