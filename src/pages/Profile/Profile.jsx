import React from 'react'
import { useUserData } from '../../context/UserContext'

const Profile = () => {
    const {userData} = useUserData()
  return (
    <div className='p-10'>
        <h2 className='font-semibold text-black text-2xl underline underline-offset-8 decoration-4 decoration-red'>Profile - {userData[0]?.userName}</h2>
        
        
        <div className='grid justify-center rounded-md py-10 '>
            <div className='flex gap-3'>
                <h6 className='font-semibold'>Username:</h6>
                <p>{userData[0]?.userName}</p>
            </div>

            <div className='flex gap-3'>
                <h6 className='font-semibold'>Email:</h6>
                <p>{userData[0]?.userEmail}</p>
            </div>

            <div className='flex gap-3'>
                <h6 className='font-semibold'>Phone No. :</h6>
                <p>{userData[0]?.userPhone}</p>
            </div>

            <div className='flex gap-3'>
                <h6 className='font-semibold'>Location:</h6>
                <p>{userData[0]?.userCity}</p>
            </div>
        </div>
    </div>
  )
}

export default Profile