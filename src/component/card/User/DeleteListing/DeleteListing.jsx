import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const DeleteListing = () => {
    
    const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  
return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Confirm you want to delete listing</DialogHeader>
        <DialogBody>
          Once the listing is delete it cannot be recovered.
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
    </>
  )
}

export default DeleteListing