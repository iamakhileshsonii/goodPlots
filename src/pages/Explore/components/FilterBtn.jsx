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
        <DialogHeader>Filter Your Search </DialogHeader>
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
