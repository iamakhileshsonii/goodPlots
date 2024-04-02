import React from 'react'
import ConfirmDelete from './ConfirmDelete';

const MyListings = ({property}) => {
const{authInfo, propertyDetail, feedDetails} = property;



const listStatus = () =>{
  if(feedDetails?.status == 'published'){
    return 'bg-green'; 
  }else{
    return 'bg-orange';
  }
}

  return (
  <div className='flex justify-center align-center gap-3 p-2 border border-bordercolor rounded-md my-4'>
    <div className='grid justify-center w-1/4'>
      <img src={propertyDetail?.featureImg} alt={propertyDetail?.title} className='object-cover rounded-md sm:h-20' />
    </div>
    <div className='grid justify-start w-3/4'>
      <div className='flex gap-3 justify-between'>
        <h2 className='font-semibold text-xs text-leftleading-4 pr-5 self-center'>{propertyDetail?.title}</h2>
        <p className={`px-2 text-white text-xs self-center rounded-sm ${listStatus()}`}>{feedDetails?.status}</p>    

      </div>
        
      <div className='flex justify-between self-center'>
        <p className='self-center px-2 py-1 text-xs'>{propertyDetail?.property_subtype}</p>
        <ConfirmDelete propId={property.id}/>
        </div>
        
    </div>
    
  </div>
  )
}

export default MyListings