import React from 'react';

const ShortList = ({property}) => {
    const{authInfo, propertyDetail, feedDetail} = property;
    return (
        <div className='flex justify-center align-center gap-3 p-2 border border-bordercolor rounded-md my-4'>
          <div className='grid justify-center w-1/4'>
            <img src={propertyDetail.featureImg} alt={propertyDetail.title} className='object-cover rounded-md sm:h-20' />
          </div>
          <div className='grid justify-start w-3/4'>
              <h2 className='font-semibold text-xs text-leftleading-4 pr-5 self-center'>{propertyDetail.title}</h2>
              <p className='self-center px-2 py-1 text-xs'>{propertyDetail.property_subtype}</p>
          </div>
          <div className='self-center'>
          
            <p className='text-xs'>Disapprove</p>
          </div>

          
        </div>
        )
}

export default ShortList