import React from 'react'
import { useContextAppointments } from '../../context/AppointmentContext'
import AppointmentCard from './AppointmentCard';

const MyAppointments = () => {

  const {appointments} = useContextAppointments();

  return (
    <div>
      {appointments.length > 0 ? (
        appointments.map(appointment => (
          <AppointmentCard detail={appointment} key={appointment.id} />
        ))
      ) : (
        <p>No appointments available</p>
      )}
    </div>
  )
}

export default MyAppointments