import React, { useState } from 'react';
import { Stepper, Step, Button } from "@material-tailwind/react";

const Filter = ({ popUp }) => {
    const handleFilter = () => {
        alert("Filter")
    }

    // Filter fields
    const [saleType, setSaleType] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [propertySubtype, setPropertySubtype] = useState('');
    const [userCity, setUserCity] = useState('');

    const handleUserCity = (e) => {
        e.preventDefault()
        console.log(userCity);
        handleNext();
      }

    const handleSaleType = (e) => {
      setSaleType(e.target.value);
      handleNext();
    }

    const handlePropertyType = (e) => {
      setPropertyType(e.target.value);
      handleNext();
    }

    const handlePropertySubtype = (e) => {
      setPropertySubtype(e.target.value);
      if (typeof popUp === "function") {
        popUp(); // Calling the popUp function
      }
    }

    // Dailogue Box
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <>
            <div className="w-full py-4 px-8">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(3)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(4)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(5)} />
                    
                </Stepper>

                {/* Conditionally render content based on active step */}
                {activeStep === 0 && (
                    <div className='grid justify-center p-5'>
                        <h4 className='text-center font-semibold text-black pt-5 pb-3'>City</h4>
                        <form className='flex gap-3 justify-evenly border border-bordercolor rounded-md px-2' onSubmit={handleUserCity}>
                            <input type="text" placeholder='Enter your city' onChange={(e)=>setUserCity(e.target.value)} className='focus:outline-none' />
                            <button type='submit'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6 hover:text-red">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>


</button>
                            
                        </form>
                    </div>
                )}

{activeStep === 1 && (
                    <div className='grid justify-center p-5'>
                        <h4 className='text-center font-semibold text-black pt-5 pb-3'>Posted By</h4>
                        <div className='flex flex-wrap  gap-3 justify-evenly'>
                            <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Buyer' onClick={handleSaleType}>Buyer</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Seller' onClick={handleSaleType}>Seller</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Goodplots partner' onClick={handleSaleType}>Goodplots partner</button>
                        </div>
                    </div>
                )}

                {activeStep === 2 && (
                    <div className='grid justify-center p-5'>
                        <h4 className='text-center font-semibold text-black pt-5 pb-3'>Listing Type</h4>
                        <div className='flex flex-wrap  gap-3 justify-evenly'>
                            <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Buy' onClick={handleSaleType}>Buy</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Sell' onClick={handleSaleType}>Sell</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Rent' onClick={handleSaleType}>Rent</button>
                        </div>
                    </div>
                )}
                {activeStep === 3 && (                
                    <div>
                        <div className='grid justify-center p-5'>
                            <h4 className='text-center font-semibold text-black pt-5 pb-3'>Choose Category</h4>
                            <div className='flex flex-wrap  gap-3 justify-start'>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Residential' onClick={handlePropertyType}>Residential</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Commercial' onClick={handlePropertyType}>Commercial</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Industrial' onClick={handlePropertyType}>Industrial/ Factory/ Warehouse</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Agriculture' onClick={handlePropertyType}>Agriculture/ Farm Land</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Warehouse' onClick={handlePropertyType}>Warehouse</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Farm House' onClick={handlePropertyType}>Farm House</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Fishery' onClick={handlePropertyType}>Fishery</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Farm House' onClick={handlePropertyType}>Farm House</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Poultry Farm' onClick={handlePropertyType}>Poultry Farm</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Hotel/ Resort/ Guesthouse' onClick={handlePropertyType}>Hotel/ Resort/ Guesthouse</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Educational Institution' onClick={handlePropertyType}>Educational Institution</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Island' onClick={handlePropertyType}>Island</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Riverbed' onClick={handlePropertyType}>Riverbed</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Mining Site' onClick={handlePropertyType}>Mining Site</button>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 4 && (
                    <div>
                        <div className='grid justify-center p-5'>
                            <h4 className='text-center font-semibold text-black pt-5 pb-3'>Choose Property Subtype</h4>
                            <div className='flex flex-wrap gap-3 justify-start'>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Residential Plot/Land' onClick={handlePropertySubtype}>Residential Plot/Land</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Independent House/ Villa/ Cottage/ Bungalow' onClick={handlePropertySubtype}>Independent House/ Villa/ Cottage/ Bungalow </button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Apartment/ Studio Apartment/ Apartment Penthouse' onClick={handlePropertySubtype}>Apartment/ Studio Apartment/ Apartment Penthouse</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Independent Builder Floor' onClick={handlePropertySubtype}>Independent Builder Floor</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='FarmHouse/ Country House' onClick={handlePropertySubtype}>FarmHouse/ Country House</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md text-xs' value='Holiday Home/ Guest House' onClick={handlePropertySubtype}>Holiday Home/ Guest House</button>
                            </div>
                        </div>
                    </div>
                )}

<div className="mt-16 grid justify-center">
    {activeStep > 0 && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black hover:text-red hover:duration-600" onClick={handlePrev}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )}
</div>
            </div>
        </>
    )
}


export default Filter;
