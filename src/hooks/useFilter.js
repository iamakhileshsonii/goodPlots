import React, { useEffect, useState } from "react";
import { useContextData } from "../context/DataContext";

const useFilter = () => {
  const { gpData, isLoading } = useContextData();
  const { filteredListing, setFilteredListing } = useState([]);

  useEffect(() => {
    const filterListing = gpData.filter(
      (list) => list.propertyDetail.type === "Residential Buy"
    );

    setFilteredListing(filterListing);
  }, []);

  return console.log(filteredListing);
};

export default useFilter;
