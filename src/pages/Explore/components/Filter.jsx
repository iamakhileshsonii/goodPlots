import React from 'react';
import { Stepper, Step, Button } from "@material-tailwind/react";

const Filter = () => {

    const handleFilter= ()=>{
        alert("Filter")
    }

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
        <div>
           <div className='gird justify-center p-5'>
           <h4 className='text-center font-semibold'>Choose type of category</h4>
           <div className='flex justify-evenly'>
            <button className='bg-red py-1 px-2 text-white rounded-md'>Buy</button>
            <button className='bg-red py-1 px-2 text-white rounded-md'>Rent</button>
           </div>
           </div>
        </div>
      )}
      {activeStep === 1 && (
        <div>
          Step 2 Content
        </div>
      )}
      {activeStep === 2 && (
        <div>
          Step 3 Content
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
