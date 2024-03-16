import React, { useState } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useUserData } from '../../../../context/UserContext';
import { db } from '../../../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



const ScheduleAppointment = ({listing}) => {

  // Check for logged in user
  const [authUser] = useState(JSON.parse(localStorage.getItem('isAuth')) || false)

  // Propert Detail 
  const {propertyDetail, authInfo, property}  = listing  
  const {userData} = useUserData();
  
  const [open, setOpen] = React.useState(false);  
  const handleOpen = () => setOpen(!open);

  // Schedule Appointment Fields
  const [userName, setUserName] = useState(userData[0]?.userName || '');
  const [userEmail, setUserEmail] = useState(userData[0]?.userEmail || '');
  const [userCity, setUserCity] = useState(userData[0]?.userCity || '');
  const [userId, setUserId] = useState(authInfo?.userId)

  const handleAppointment = async (event) =>{
    event.preventDefault();
    const docRef = collection(db, 'gp_appointments')
    const appointmentData = {
      client:{
        clientId: userId,
        clientName: userName,
        clientEmail: userEmail,
        clientCity: userCity 
      },
      author:{
        authorId: authInfo.userId,
        authorName: authInfo.userName,
        authorEmail: authInfo.userEmail,
      },
      listing:{
        listingId: listing.id,
        listingTitle: propertyDetail.title
      },
      appointmentInfo:{
        status: 'pending',
        createdAt: serverTimestamp(),
      }
    }
    addDoc(docRef, appointmentData)
    console.log("Appointment Booked")
    handleOpen()
  }

  // Date Picker
  const [startDate, setStartDate] = useState(new Date());

  const handleCancel = () =>{
    handleOpen();
  }

  
   
    return (
      <>
      {
        authUser ? 
        <p>Login to view</p> :
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={handleOpen}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
        
                <Dialog open={open} handler={handleOpen}>
                  <DialogHeader className="justify-center">Book An Appointment</DialogHeader>
                  <h4 className='text-center'>Appointment with {propertyDetail?.title} </h4>
                  <DialogBody>
                  <div className='p-2 '>    
                  <form onSubmit={handleAppointment} className='grid'>
        
                  <div className='flex justify-center self-center'>
                      <p className='self-center font-semibold'>Appointment Date</p>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='py-1 px-2 w-full font-bold text-red underline underline-offset-4 text-left'/>
                    </div>
        
        
                  <div className='flex justify-between'>
                    <input type="text" value={userName} className='border border-bordercolor py-1 px-2 rounded-md m-1 w-1/2' onChange={(e)=> setUserName(e.target.value)}/>
                    <input type="email" value={userEmail}   className='border border-bordercolor py-1 px-2 rounded-md m-1 w-1/2' onChange={(e)=> setUserEmail(e.target.value)}/>
                  </div>
        
                  <div className='flex justify-center self-center'>
                  <input type="text" value={userCity}  className='border border-bordercolor py-1 px-2 rounded-md m-1 w-1/2' onChange={(e)=> setUserCity(e.target.value)}/>
                      <p className='border border-bordercolor w-1/2 self-center py-1 px-2 rounded-md '>{userData[0]?.userPhone}</p>
                  
                  </div>
        
                  <div className='flex justify-between mt-6 '>
                  <p className="text-black font-semibold px-2 py-1 rounded-md m-1 border border-bordercolor w-1/2 text-center" onClick={handleOpen} >Cancel</p>
                  <button type='submit'  className="bg-red text-white font-semibold px-2 py-1 rounded-md m-1 w-1/2">Schedule</button>
                  </div>
                        
                    </form>
                  </div>
                  </DialogBody>
                  <DialogFooter>
                  </DialogFooter>
                </Dialog>
              </div>
      }
      </>
    );
}

export default ScheduleAppointment