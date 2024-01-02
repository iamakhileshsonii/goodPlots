import React, { useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {

    const [authUser,  setauthUser] = userState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setauthUser(user)
            }else{
                setauthUser(null);  
            }
        })
    }, [])

  return (
   <div>
        {authUser ? <p>{`Signed in as ${authUser.email}`}</p>: <p>Signed Out</p>}
   </div>
  )
}

export default AuthDetails