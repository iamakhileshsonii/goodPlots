import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Set logged In user
  const [authData, setAuthData] = useState({
    authUsername: "",
    authEmail: "",
    authDp: "",
  });

  // Fetch currently logged in user
  useEffect(() => {
    if (auth.currentUser) {
      setAuthData({
        authUsername: auth.currentUser.displayName,
        authEmail: auth.currentUser.email,
        authDp: auth.currentUser.photoURL,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
