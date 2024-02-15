import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const usePendingListings = () => {
  const [fetchedDocs, setFetchedDocs] = useState([]); //   All fetched docs

  const docRef = collection(db, "gp_properties");

  useEffect(() => {
    async function fetchProperties() {
      const data = await getDocs(docRef);
      setFetchedDocs(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    fetchProperties();
  }, []);

  // Filter all the listing that are in pending state
  const pendingListings = fetchedDocs.filter(
    (list) => list.feedDetails && list.feedDetails.status === "pending"
  );
  return { pendingListings };
};

export default usePendingListings;
