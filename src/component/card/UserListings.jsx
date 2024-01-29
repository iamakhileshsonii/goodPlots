import React from 'react';
import { Tooltip, Button } from "@material-tailwind/react";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import DeleteListing from './User/DeleteListing/DeleteListing';


const UserListings = ({myproperty}) => {

    const navigate = useNavigate();

    const{authInfo, propertyDetail, id} = myproperty;
  
    async function handleDelete(id){
      const document = await doc(db, 'gp_properties', id);
      deleteDoc(document);
      navigate('/home')
      console.log("Document Deleted Successfully");
    } 

  return (
    <div className='border border-bordercolor rounded-lg text-left p-3 my-2'>
    <h6 className='font-semibold text-xl'>{propertyDetail.title}</h6>
    <p className='text-xs'>{propertyDetail.desc}</p>
    
    <div className='flex'>
    <p className='rounded p-1 my-2 border border-bordercolor text-xs'>{propertyDetail.property_subtype}</p>
    </div>

    <div className='flex py-4'>
        <div className='flex px-2 w-1/4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <p className='text-xs self-center italic'>{authInfo.userName}</p>
        </div>

        <div className='flex px-2 justify-between w-full'>
          <div className='flex px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

              <p className='text-xs self-center italic'>{propertyDetail.city}</p>
          </div>

          <div className='flex'>
          <Tooltip content="Delete Listing" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red" onClick={()=>handleDelete(id)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"  />
                </svg>
          
                </Tooltip>
            <DeleteListing/>
          </div>
          
        </div>
        
    </div>
</div>
  )
}

export default UserListings