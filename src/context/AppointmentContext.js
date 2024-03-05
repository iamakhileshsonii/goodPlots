import React, { createContext, useEffect, useContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const docRef = collection(db, "gp_appointments");

  useEffect(() => {
    async function fetchAppointments() {
      const data = await getDocs(docRef);
      const appointmentsData = data.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));
      setAppointments(appointmentsData);
      console.log(appointmentsData);
    }

    fetchAppointments();
  }, []);

  return (
    <AppointmentContext.Provider value={{ appointments }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useContextAppointments = () => {
  const context = useContext(AppointmentContext);
  return context;
};

export default AppointmentProvider;
