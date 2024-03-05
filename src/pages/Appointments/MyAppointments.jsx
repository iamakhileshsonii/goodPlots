import React from 'react'
import { useContextAppointments } from '../../context/AppointmentContext'
import AppointmentCard from './AppointmentCard';

const MyAppointments = () => {

  const {appointments} = useContextAppointments();

  return (
    <div>
      { appointments && appointments.map((appointment)=>(
        <AppointmentCard detail={appointment} key={appointment.id}/>
      )) 
      }
    </div>
  )
}

export default MyAppointments