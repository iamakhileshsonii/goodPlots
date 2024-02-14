import React, { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";
import useUsers from "./useUsers";

const useLoggedUserData = () => {
  // Fetch Current Logged In User
  const { currentUser, isLoading } = useCurrentUser();

  // All Users list
  const { authUser, authUserLoading } = useUsers();

  // Information of current loggedIn user stored in local object
  const [userDashboardData, setUserDashboardData] = useState([]);

  useEffect(() => {
    async function fetchUserInformation() {
      try {
        const currentUserId = currentUser.userId;
        const filterCurrentUserData = authUser.find(
          (user) => authUser.authInfo.userId === currentUserId
        );

        setUserDashboardData(filterCurrentUserData);
      } catch (error) {
        console.log("Error Fetching data", error);
      }
    }

    fetchUserInformation();
  }, []);
  return { userDashboardData };
};

export default useLoggedUserData;
