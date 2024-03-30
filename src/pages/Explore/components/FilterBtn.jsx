import React from 'react';
import {Button,Dialog, DialogHeader, DialogBody, DialogFooter,
  } from "@material-tailwind/react";
  import Filter from './Filter';

const FilterBtn = () => {

    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
         <Filter/>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default FilterBtn
