import React from 'react'
import ConfirmDelete from './ConfirmDelete';

const MyListings = ({property}) => {
const{authInfo, propertyDetail, feedDetail} = property;
  return (
  <div className='flex justify-center align-center gap-3 p-2 border border-bordercolor rounded-md my-4'>
    <div className='block w-1/4'><img src={propertyDetail.featureImg} alt="" className='object-cover rounded-md' /></div>
    <div className='block w-3/4'>
        <h2 className='font-semibold text-left text-sm leading-4 pr-5'>{propertyDetail.title}</h2>
    </div>
    <div>
    
      <ConfirmDelete propId={property.id}/>
    </div>
  </div>
  )
}

export default MyListings