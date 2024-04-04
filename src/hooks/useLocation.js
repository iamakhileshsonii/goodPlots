import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    stateName: "", // Add a state name field
  });

  const onSuccess = async (position) => {
    const { latitude, longitude } = position.coords;

    // Fetch the state name using the coordinates
    const stateName = await fetchStateName(latitude, longitude);

    setLocation({
      loaded: true,
      coordinates: { lat: latitude, lng: longitude },
      stateName, // Set the state name
    });
  };

  const onError = (error) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      loaded: true,
      error,
    }));
  };

  // Function to fetch state name using Nominatim API
  const fetchStateName = async (lat, lng) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.address.state || "State not found"; // Return the state name or a default message
    } catch (error) {
      console.error("Failed to fetch state name:", error);
      return "Failed to fetch state name";
    }
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useLocation;
