import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }
   

const FaqAccordion = () => {
    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    return (
      <>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="text-xs py-1 text-black">WHAT IS KYC?</AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className="text-xs py-1 text-black">
          WHY KYC IS IMPORTANT
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-xs py-1 text-black">
          CAN I LIST MY PROPERTY WITHOUT COMPLETING KYC?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)} className="text-xs py-1 text-black">
          CAN I DO KYC LATER?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)} className="text-xs py-1 text-black">
          HOW CAN I DO KYC FOR SOMEONE ELSE'S PROPERTY?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)} className="text-xs py-1 text-black">
          HOW TO RETRIEVE MY SAVED KYC FORM INFORMATION?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={7} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(7)} className="text-xs py-1 text-black">
          HOW TO EDIT MY KYC FORM AND INFORMATION?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={8} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(8)} className="text-xs py-1 text-black">
          CAN I DELETE MY KYC FORM AND INFORMATION?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={9} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(9)} className="text-xs py-1 text-black">
          WHAT IS GOODPLOTS KYC CONFIDENTIALITY POLICY?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={10} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(10)} className="text-xs py-1 text-black">
          HOW WILL MY KYC INFORMATION BE USED?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={11} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(11)} className="text-xs py-1 text-black">
          CAN MY KYC INFORMATION BE MISUSED?
          </AccordionHeader>
          <AccordionBody>
            Items
          </AccordionBody>
        </Accordion>
      </>
    );
}

export default FaqAccordion