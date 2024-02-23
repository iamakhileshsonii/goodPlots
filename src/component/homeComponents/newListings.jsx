import React, { useEffect, useState } from 'react'
import { useContextData } from '../../context/DataContext';
import { useUserData as userContext } from '../../context/UserContext';

const NewListings = () => {
    
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
                const filter = gpData.filter((list) => list.propertyDetail.city === currentUserCity);
                setListings(filter);
            }
            } catch (error) {
                console.log("Error Filtering the listings", error)
            }
            
        }
        filterNewListings()
    }, [])

    const statusColor = (list) =>{
        if(list.feedDetails.status === 'published'){
            return 'border border-green';
        }else if(list.feedDetails.status === 'pending'){
            return 'border border-orange';
        }else{
            return 'border border-bordercolor';
        }
    }

  return (
    <div>
        {
            listings && listings.map((list)=>(
                <div className={`block  my-3 p-3 rounded-md ${statusColor(list)}`} key={list.id}>
                    <h4 className='text-left text-black font-semibold'>{list.propertyDetail.title}</h4>
                    <div className='flex gap-4'>
                        <p className='border px-1 border-bordercolor rounded-sm text-xs text-black italic'>{list.propertyDetail.property_subtype}</p>
                        <p className='border px-1 border-bordercolor rounded-sm text-xs text-black italic'>{list.propertyDetail.city}</p>
                        <p className='border px-1 border-bordercolor rounded-sm text-xs text-black italic'>{list.authInfo.userName}</p>
                        <p className='text-xs'>{list.feedDetails.status}</p>
                    </div>
             </div>
            ))
        }       
    </div>
  )
}

export default NewListings