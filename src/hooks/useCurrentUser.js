import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({
    userId: "",
    userName: "",
    userEmail: "",
  });

  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  // Fetch current user
  useEffect(() => {
    if (auth.currentUser) {
      try {
        const loggedUser = {
          userId: auth.currentUser.uid,
          userName: auth.currentUser.displayName,
          userEmail: auth.currentUser.email,
        };

        setCurrentUser(loggedUser);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching current user data:", error);
        setCurrentUser(null);
        setIsLoading(false);
      }
    } else {
      // If auth.currentUser is not available
      setCurrentUser(null);
      setIsLoading(false);
    }
  }, []);
  return { currentUser, isLoading };
};

export default useCurrentUser;
