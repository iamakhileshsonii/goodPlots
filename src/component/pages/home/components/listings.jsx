import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import property1 from '../../assets/images/property_1.jpeg';
  import property2 from '../../assets/images/property_2.jpeg'
   

const Listings = () => {
  return (
    <>
    
    <div className='py-10 px-2 overflow-y-scroll h-4/5'>
    <div className='pb-4'><h2 className='font-semibold uppercase text-red border-b-2 border-red w-1/3 text-left '>My Listings</h2></div>
    
        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property1} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property2} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property1} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property1} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property1} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property1} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        <div className='border border-bordercolor flex rounded-lg py-2 px-2 m-2'>
            <div className='block w-1/5 p-0'>
                <img src={property1} alt="" className='rounded-md h-24 w-full'/>
            </div>
            <div className='block w-4/5 p-2'>
                <h2 className='text-lg text-left font-semibold'>Property headline</h2>
                <p className='text-xs text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis corrupti incidunt vel voluptatem temporibus provident. Dicta unde dolor quod.</p>
            </div>
        </div>

        

    

  

    </div>
    </>
  )
}

export default Listings