import React, { useEffect, useState } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import ListingCards from '../card/ListingCards';
import { Link } from 'react-router-dom';

const Center = () => {

  const [gpListings, setGpListings] = useState([]);
  const listingRef = collection(db, 'gp_properties');

  const [currentAuthId, setCurrentAuthId] = useState();

  useEffect(() => {
    async function getFeed() {
      const data = await getDocs(listingRef);
      setGpListings(data.docs.map((document) => ({
        ...document.data(),
        id: document.id
      })))
    }
    getFeed();
  }, []);
  
  useEffect(() => {
  }, [gpListings]);
  

  // Fetch currently loggedIn user ID
  useEffect(()=>{
    function fetchAuthId(){
      if(auth.currentUser){
        setCurrentAuthId(auth.currentUser.uid);
      }
    }
    fetchAuthId();

  },[])

  
  // Display listings which are not listed by current user
  const filterListings = gpListings.filter(
    (list)=>list.authInfo.userId !== currentAuthId
    )
  

  return (
    <>
    
    
    <div>
    <div className='grid justify-center w-full p-5' >
        <h4 className='border-b-4 border-red font-semibold'>All Listings</h4>
      </div>

      {
        filterListings.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
                <ListingCards prop={property} propid={property.id} />
            </Link>
        ))
    }
      
    </div>

    
    </>
  )
}

export default Center