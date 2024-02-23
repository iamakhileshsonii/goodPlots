import React, { useEffect, useState } from 'react'
import { useContextData } from '../../context/DataContext';
import { useUserData as userContext } from '../../context/UserContext';

const ActiveListings = () => {

      // fetching all documents
      const {gpData, isLoading} = useContextData();

      // Fetch current user
      const {userData} = userContext();
  
      // Listings according to current user City
      const [listings, setListings] = useState([]);
  
      useEffect(()=>{
          async function filterNewListings(){
              try {
                // Check if userData is available
                if(userData && userData.length > 0) {
                  const currentUserCity = userData[0].userCity;
                  const filter = gpData.filter((list) => list.propertyDetail.city === currentUserCity && list.feedDetails.status === "published");
                  setListings(filter);
              }
              } catch (error) {
                  console.log("Error Filtering the listings", error)
              }
              
          }
          filterNewListings()
      }, [])

  return (
    <div>

    {
        listings && listings.map((list)=>(
            <div className='block my-3 border border-bordercolor p-3 rounded-md' key={list.id}>
                <h4 className='text-left text-black font-semibold'>{list.propertyDetail.title}</h4>
                <div className='flex gap-4'>
                    <p className='border px-1 border-bordercolor rounded-sm text-xs text-black italic'>{list.propertyDetail.property_subtype}</p>
                    <p className='border px-1 border-bordercolor rounded-sm text-xs text-black italic'>{list.propertyDetail.city}</p>
                    <p className='border px-1 border-bordercolor rounded-sm text-xs text-black italic'>{list.authInfo.userName}</p>
                </div>
         </div>
        ))
    }

    
</div>
  )
}

export default ActiveListings