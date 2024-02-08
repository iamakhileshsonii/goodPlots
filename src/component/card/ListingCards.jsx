import React from 'react'

const ListingCards = ({prop}) => {
  
  const {propertyDetail, authInfo}  = prop

  return (
    <div className='border border-bordercolor rounded-lg text-left p-3 my-2'>
        <h6 className='font-semibold text-xl'>{propertyDetail.title}</h6>
        <p className='text-xs'>{propertyDetail.desc}</p>
        
        <div className='flex'>
        <p className='rounded p-1 my-2 border border-bordercolor text-xs'>{propertyDetail.property_subtype}</p>
        </div>

        <div className='flex py-4'>
            <div className='flex px-2 w-1/4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <p className='text-xs self-center italic'>{authInfo.userName}</p>
            </div>

            <div className='flex px-2 justify-between w-full'>
              <div className='flex px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                  <p className='text-xs self-center italic'>{propertyDetail.city}</p>
              </div>

              <div>
                <p>call</p>
                <p className='px-3 bg-red rounded-md text-white'>Contact</p>
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default ListingCards