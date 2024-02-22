import React, { useEffect, useState, createContext, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
  const [authId, setAuthId] = useState('');
  const [userData, setUserData] = useState([]);

  const docRef = collection(db, "gp_users");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthId(user.uid);
      } else {
        setAuthId(''); // Reset authId if user is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getDocs(docRef);
        const fetchedData = data.docs.map((document) => ({
          ...document.data(),
          id: document.id
        }));

        const filteredUser = fetchedData.filter((user) => user.authInfo.userId === authId);
        setUserData(filteredUser);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    }

    if (authId) {
      fetchUserData();
    }
  }, [authId]);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
