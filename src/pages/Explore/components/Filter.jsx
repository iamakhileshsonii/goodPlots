import React, { useState } from 'react';
import { Stepper, Step, Button } from "@material-tailwind/react";

const Filter = () => {

    const handleFilter = () => {
        alert("Filter")
    }

    // Filter fields
    const [saleType, setSaleType] = useState('')
    const [propertyType, setPropertyType] = useState('')
    const [propertySubtype, setPropertySubtype] = useState('')

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
      handleNext();
    }


    // Dailogue Box
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <>
            <div className='grid justify-center py-2'>

                <button className='bg-red py-1 px-2 rounded-md text-white' onClick={handleFilter}>Filter</button>
            </div>


            <div className="w-full py-4 px-8">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
                    <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
                </Stepper>

                {/* Conditionally render content based on active step */}
                {activeStep === 0 && (
                    <div className='grid justify-center p-5'>
                    <h4 className='text-center font-semibold'>Choose Sale Type</h4>
                    <div className='flex gap-3 justify-evenly'>
                        <button className='bg-red py-1 px-2 text-white rounded-md' value='Buy' onClick={handleSaleType}>Buy</button>
                        <button className='bg-red py-1 px-2 text-white rounded-md' value='Rent' onClick={handleSaleType}>Rent</button>
                    </div>
                </div>
                )}
                {activeStep === 1 && (                
                    <div>
                        <div className='grid justify-center p-5'>
                            <h4 className='text-center font-semibold'>Choose Category</h4>
                            <div className='flex gap-3 justify-evenly'>
                                <button className='bg-red py-1 px-2 text-white rounded-md' value='Residential' onClick={handlePropertySubtype}>Residential</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md' value='Commercial' onClick={handlePropertySubtype}>Commercial</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md' value='Industrial' onClick={handlePropertySubtype}>Industrial</button>
                                <button className='bg-red py-1 px-2 text-white rounded-md' value='Agriculture' onClick={handlePropertySubtype}>Agriculture</button>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 2 && (
                    <div>
                    <div className='grid justify-center p-5'>
                        <h4 className='text-center font-semibold'>Choose Property Subtype</h4>
                        <div className='flex gap-3 justify-evenly'>
                            <button className='bg-red py-1 px-2 text-white rounded-md' value='Residential Plot/Land' onClick={handlePropertyType}>Residential Plot/Land</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md' value='Independent House/ Villa/ Cottage/ Bungalow' onClick={handlePropertyType}>Independent House/ Villa/ Cottage/ Bungalow </button>
                            <button className='bg-red py-1 px-2 text-white rounded-md' value='Apartment/ Studio Apartment/ Apartment Penthouse' onClick={handlePropertyType}>Apartment/ Studio Apartment/ Apartment Penthouse</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md' value='Independent Builder Floor' onClick={handlePropertyType}>Independent Builder Floor</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md' value='FarmHouse/ Country House' onClick={handlePropertyType}>FarmHouse/ Country House</button>
                            <button className='bg-red py-1 px-2 text-white rounded-md' value='Holiday Home/ Guest House' onClick={handlePropertyType}>Holiday Home/ Guest House</button>
                        </div>
                    </div>
                </div>
                )}

                <div className="mt-16 flex justify-between">
                    <Button onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div>
            </div>

        </>

    )
}

export default Filter;
