import React from 'react';
import { db } from '../../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

const AppointmentCard = ({detail}) => {
const appointment = detail


const handleReject = async ()=>{
    const appointment = doc(db, 'gp_appointments', detail.id)
    await deleteDoc(appointment)
    console.log("Appointment Rejected",detail.id)
    alert("Appointment Rejected Successfully!")
}

const handleAccept = ()=>{
    console.log("Appointment Accepted",detail.id)
    alert("Appointment Accepted Successfully!")
}
  return (
    <div className='p-2 my-2 border border-bordercolor rounded-md'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <h4 className='font-semibold text-lg'>{appointment.client.clientName}</h4>
                <p>{detail.id}</p>
                <p>24th Feb 2024</p>
            </div>
            <div className='flex gap-4'>
                <h4>{appointment.listing.listingTitle}</h4>
                
            </div>
        </div>
        <div className='flex justify-between mt-5 items-center'>
            <div className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p>9934212301</p>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='text-red' onClick={handleReject}>Reject</p>
                <button className='text-white font-semibold py-1 px-2 bg-red rounded-md' onClick={handleAccept}>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default AppointmentCard