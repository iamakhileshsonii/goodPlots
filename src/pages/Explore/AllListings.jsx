import React from 'react';
import { useContextData } from '../../context/DataContext';
import { useUserData } from '../../context/UserContext';
import ListingCards from '../home/components/cards/ListingCards';

const AllListings = () => {

    const isAuth = JSON.parse(localStorage.getItem('isAuth')) || false

    const {gpData, isLoading} = useContextData();
    const {userData} = useUserData();
  
    // Display loading text while data is being fetched
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    // Filter listings which are not listed by current user
    const filterListings = gpData.filter(
      (list) => list.authInfo.userId !== userData?.authInfo?.userId && list.feedDetails.status === "published"
    );

    const handleFilter = ()=>{
      console.log("Filter Started")
    }
  
  return (
    <div>
    <div className='flex justify-between w-full p-5'>
      <h4 className='border-b-4 border-red font-semibold'>All Listings</h4>
      {
        isAuth ? 
        <select name="Filter" id="Filter" className='bg-red border border-red rounded-md text-white' onClick={handleFilter}>
          <option value="Filter" defaultChecked disabled>Filter</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Industrial">Industrial</option>
          <option value="Agriculture">Agriculture</option>
        </select>
        :
        <select name="Filter" id="Filter" className='bg-red border border-red rounded-md text-white' onClick={handleFilter}>
          <option value="Filter" defaultChecked disabled >Filter</option>
          <option value="Residential" >Residential</option>
          <option value="Commercial" >Commercial</option>
          <option value="Industrial" >Industrial</option>
          <option value="Agriculture" >Agriculture</option>
        </select>
      }

    </div>


    <div>
    {filterListings.map((property) => (
      
      <ListingCards prop={property} propid={property.id}  key={property.id} />
  
  ))}
    </div>

  </div>
  )
}

export default AllListings