import React from 'react'

const UserMyListings = ({list}) => {
    const {authInfo, feedDetails, propertyDetail} = list
  return (
    <>
        <div className='block p-5'>
            <div className='p-5 border border-bordercolor rounded-md'>
                <div className='flex justify-around'>
                    <div className='w-2/3'>
                        <h4 className='font-semibold text-lg'>{propertyDetail.title}</h4>
                        <div className='flex'>
                            <p className='border border-bordercolor m-1 p-1 rounded-sm text-xs self-center'>{propertyDetail.property_subtype}</p>
                            <p className='border border-bordercolor m-1 p-1 rounded-sm text-xs self-center'>{propertyDetail.city}</p>
                        </div>
                    </div>

                    <div className='w-1/3 flex justify-center border-l border-bordercolor'>
                        <p className='border border-bordercolor self-center m-1 p-1 rounded-md flex hover:bg-red hover:text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"    className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                        Sold</p>
                        <p className='border border-bordercolor self-center m-1 p-1 rounded-md flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        Edit Listing</p>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default UserMyListings