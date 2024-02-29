import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Tooltip,
  } from "@material-tailwind/react";
  import FaqAccordion from '../elements/FaqAccordion';


const Kyc = () => {
    const [open, setOpen] = React.useState(false);
   
    const handleOpen = () => setOpen(!open);

   
    return (
      <>
        
        <button className='bg-red text-white hidden' onClick={handleOpen}>KYC</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="text-center">KYC</DialogHeader>
          <DialogBody>
          Your listing has been accepted for KYC. Upon complition of KYC, your property will be Published on goodplots.com. Our RERA registered goodplots partner agent may connect with you shortly for help & assistance. you may CONNECT with them earlier.
          <div className='p-2 my-5'>
            <h4 className='font-bold text-red text-xl'>Frequently Asked Questions - FAQ</h4>
            <FaqAccordion/>
          </div>
          </DialogBody>
          <DialogFooter>
            
            <button className="bg-red text-white font-semibold px-2 py-1 rounded-md" onClick={handleOpen}>Understood</button>
          </DialogFooter>
        </Dialog>
      </>
    );
}
export default Kyc