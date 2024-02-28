import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [gpData, setGpData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const docRef = collection(db, "gp_properties");

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await getDocs(docRef);
        setGpData(
          data.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }))
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
      console.log("GP DATA FETCHED!")
    }
    fetchProperties();
  }, []);

  return (
    <DataContext.Provider value={{ gpData, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useContextData = () => {
  const context = useContext(DataContext);
  return context;
};

export default DataProvider;
