import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useLoggedUser = () => {
  const [loggedUserId, setLoggedUserId] = useState();
  const [userDataList, setUserDataList] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const logUserId = user.uid;
        setLoggedUserId(logUserId);

        const data = await getDocs(collection(db, "gp_users"));
        setUserDataList(
          data.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }))
        );
      } else {
        console.log("User not logged in");
      }
    });

    // Cleanup function to unsubscribe from the listener when component unmounts
    return () => unsubscribe();
  }, []);

  const filterLogUser = userDataList.filter(
    (user) => user.authInfo.userId === loggedUserId
  );

  return { filterLogUser };
};

export default useLoggedUser;
