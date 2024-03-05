import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataProvider from "./context/DataContext";
import UserProvider from "./context/UserContext";
import AppointmentProvider from "./context/AppointmentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <DataProvider>
        <AppointmentProvider>
          <App />
        </AppointmentProvider>
      </DataProvider>
    </UserProvider>
  </React.StrictMode>
);
