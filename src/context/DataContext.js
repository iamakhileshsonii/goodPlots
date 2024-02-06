import { createContext, useContext } from "react";

const dataContext = createContext();

export const dataProvider = ({ children }) => {
  const value = {
    name: "Akhilesh",
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = () => {
  const context = useContext(dataContext);
  return context;
};
