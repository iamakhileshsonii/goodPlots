import React from 'react'
import ConfirmDelete from './ConfirmDelete';

const MyListings = ({property}) => {
const{authInfo, propertyDetail, feedDetail} = property;
  return (
  <div className='flex justify-center align-center gap-3 p-2 border border-bordercolor rounded-md my-4'>
    <div className='grid justify-center w-1/4'>
      <img src={propertyDetail.featureImg} alt={propertyDetail.title} className='object-cover rounded-md h-28' />
    </div>
    <div className='grid justify-start w-3/4'>
        <h2 className='font-semibold text-left text-lg leading-4 pr-5 self-center'>{propertyDetail.title}</h2>
        <p className='border border-bordercolor rounded-md self-center px-2 py-1'>{propertyDetail.property_subtype}</p>
    </div>
    <div>
    
      <ConfirmDelete propId={property.id}/>
    </div>
  </div>
  )
}

export default MyListings