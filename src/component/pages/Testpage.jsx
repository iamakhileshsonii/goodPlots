import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

const Testpage = () => {
  const [loggedUserId, setLoggedUserId] = useState();
  const [userDataList, setUserDataList] = useState([]);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const logUserId = user.uid;
        setLoggedUserId(logUserId);
  
        const data = await getDocs(collection(db, 'gp_users'));
        setUserDataList(data.docs.map(document => ({
          ...document.data(),
          id: document.id
        })));
      } else {
        console.log("User not logged in");
      }
    });
  
    // Cleanup function to unsubscribe from the listener when component unmounts
    return () => unsubscribe();
    
  }, []);

  const filterLogUser = userDataList.filter((user)=> user.authInfo.userId === loggedUserId);

  return (
    <div>
    {
      filterLogUser.map((user) => (
          <div key={user.id}>
            <div className='m-5 p-4 border border-bordercolor rounded-lg block'>
              <h2 className='font-semibold text-xl text-center'>LOGGED USER DETAILS</h2>
                <div className='grid justify-center p-5'>
                  <h6>Username: {user.userName}</h6>
                  <p>User Id: {user.authInfo.userId}</p>
                  <p>Role: {user.userRole}</p>
                  <p>City: {user.userCity}</p>
                  <p>Gender: {user.userGender}</p>
                  
                </div>
            
            </div>
            
          </div>
        ))
    }
    </div>
  );
};

export default Testpage;