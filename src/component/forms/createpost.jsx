import React from 'react';
import { Tooltip } from '@material-tailwind/react';
import { Avatar } from "@material-tailwind/react";
import profilDp from '../../assets/images/avatar.jpeg';

const Createpost = () => {
  return (
    <>
    <div className='flex justify-evenly p-4 border border-bordercolor rounded-xl'>
    <Avatar  src={profilDp} alt="avatar" variant='circular'></Avatar>
    <form action="#" className='flex w-full ml-4'>
      <input type="text" name="text" placeholder='List your property' className='w-full outline-none rounded-xl p-2'/>

      <div className='self-center'>
        <Tooltip content="Share" placement="bottom">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>

        </Tooltip>
        </div>
    </form>

    </div>


    <div className='flex justify-evenly' >
        <label htmlFor="uploadImage">
        <Tooltip content="Upload image" placement="bottom">
            
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

        
        </Tooltip>
        </label>

        <input type="file" style={{display: "none"}} id='uploadImage'></input>
    </div>
    </>
  )
}

export default Createpost