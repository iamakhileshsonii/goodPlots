import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Tooltip,
  } from "@material-tailwind/react";
  import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ScheduleAppointment = ({listing}) => {

  const {propertyDetail, authInfo, property}  = listing  
  
  const [open, setOpen] = React.useState(false);
   
    const handleOpen = () => setOpen(!open);

    const handleAppointment = (event) =>{
      event.preventDefault();
      console.log("Appointment Booked", propertyDetail.title);
      handleOpen()
    }

  // Date Picker
  const [startDate, setStartDate] = useState(new Date());
   
    return (
      <>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={handleOpen}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="justify-center">Book An Appointment</DialogHeader>
          <h4 className='text-center'>Appointment with {propertyDetail.title} </h4>
          <DialogBody>
          <div className='p-2 my-5 '>    
          <form onSubmit={handleAppointment} className='grid'>
                <input type="text" value="Akhilesh Soni" className='border border-bordercolor py-1 px-2 rounded-md m-1'/>
                <input type="email" value="iamakhileshsoni@gmail.com"   className='border border-bordercolor py-1 px-2 rounded-md m-1'/>
                <input type="text" value="City"  className='border border-bordercolor py-1 px-2 rounded-md m-1'/>
                <input type="text" placeholder='Pick a date'  className='border border-bordercolor py-1 px-2 rounded-md m-1'/>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <button type='submit'  className="bg-red text-white font-semibold px-2 py-1 rounded-md m-1">Schedule</button>
            </form>
          </div>
          </DialogBody>
          <DialogFooter>
          </DialogFooter>
        </Dialog>
      </>
    );
}

export default ScheduleAppointment