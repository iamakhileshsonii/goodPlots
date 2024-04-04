import React from 'react';
import {Button,Dialog, DialogHeader, DialogBody, DialogFooter,
  } from "@material-tailwind/react";
  import Filter from './Filter';

const FilterBtn = () => {

    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

  return (
    <div>
      <button onClick={handleOpen} className='py-1 px-2 bg-red text-white font-semibold rounded-md'>Filter</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className='flex justify-between w-full'>
            <h4 className='font-semibold'>Filter Your Search </h4>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red cursor-pointer" onClick={handleOpen}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

          </div>
        </DialogHeader>
        <DialogBody>
         <Filter popUp={handleOpen}/>
        </DialogBody>
        <DialogFooter>
          
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default FilterBtn