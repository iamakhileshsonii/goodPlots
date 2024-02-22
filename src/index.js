import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataProvider from "./context/DataContext";
import UserProvider from "./context/UserContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <UserProvider>
      <DataProvider>
        <App />
      </DataProvider>
      </UserProvider>
  </React.StrictMode>
);
