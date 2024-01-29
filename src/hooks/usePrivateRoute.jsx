import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const UsePrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

  return isAuth ? children : <Navigate to="/login" />;
};

export default UsePrivateRoute;
