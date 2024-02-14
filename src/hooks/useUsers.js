import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const useUsers = () => {
  const [authUser, setAuthUser] = useState([]);
  const [authUserLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    async function fetchUsers() {
      try {
        const docRef = collection(db, "gp_users");
        const users = await getDocs(docRef);
        setAuthUser(
          users.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }))
        );
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error Fetching User Data:", error);
        setIsLoading(false); //  Set loading state to false in case of error
      }
    }
  }, []);
  return { authUser, authUserLoading };
};

export default useUsers;
