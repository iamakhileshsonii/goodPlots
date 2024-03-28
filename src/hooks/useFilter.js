import React from "react";
import { useContextData } from "../context/DataContext";

const useFilter = () => {
  const { gpData, isLoading } = useContextData();

  return "Filter Listing";
};

export default useFilter;
