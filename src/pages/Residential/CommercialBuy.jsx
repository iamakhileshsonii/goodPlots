import React, { useState } from 'react';
import { Card, Input, Checkbox, Button, Typography, Textarea, Radio } from "@material-tailwind/react";
import 'react-datepicker/dist/react-datepicker.css';
import Kyc from '../home/components/cards/Kyc';

const CommercialBuy = () => {
    return (
        <div className='grid justify-center py-20 px-40 border-bordercolor'>
        <Card color="transparent" shadow={false}>
    
        <div>
        <Typography
            variant="h4"
            color="blue-gray"
            className="text-center text-3xl"
          >
            Commercial Buy
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal pb-5 border-b border-bordercolor"
          >
            Publish your new residential property listing on{" "}
            <span className="text-red font-semibold">GoodPlots</span>.
          </Typography>
        </div>
    
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            size="lg"
            placeholder="275 Sq.Yd. spacious corner plot with serene mountain view in Amaravati, Panchkula"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name='residentialBuy_title'
         
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
    
        <div className="w-96">
          <Textarea label="Message" placeholder='1500 Sq.Yd.residential plot with easy access to essential facilities for sale in Sector 9,Chandigarh' name='residentialBuy_desc'  />
        </div>
    
        <div className='w-96'>
            <select name="residentialBuy_Subtype" placeholder="Select Subtype" className='p-4 border border-bordercolor rounded w-96'>
             <option disabled selected value> select property subtype </option>
              <option value="Residential Plot/Land">Residential Plot/Land</option>
              <option value="Independent House/ Villa/ Cottage/ Bungalow">Independent House/ Villa/ Cottage/ Bungalow	</option>
              <option value="Apartment/ Studio Apartment/ Apartment Penthouse">Apartment/ Studio Apartment/ Apartment Penthouse</option>
              <option value="Independent Builder Floor">Independent Builder Floor</option>
              <option value="FarmHouse/ Country House">FarmHouse/ Country House</option>
              <option value="Holiday Home/ Guest House">Holiday Home/ Guest House</option>
            </select>
        </div>
    
        
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Address
          </Typography>
          <Input
            size="lg"
            placeholder="275 Sq.Yd. spacious corner plot with serene mountain view in Amaravati, Panchkula"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name='residentialBuy_address'
        
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
    
    
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Locality
          </Typography>
          <Input
            size="lg"
            placeholder="275 Sq.Yd. spacious corner plot with serene mountain view in Amaravati, Panchkula"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name='residentialBuy_locality'
        
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
    
          
        <div className="my-4 flex items-center gap-4">
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  City
                </Typography>
                <Input
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="Chandigarh"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  name='residentialBuy_city'
                
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 font-medium"
                >
                  State
                </Typography>
                <Input
                  containerProps={{ className: "min-w-[72px]" }}
                  placeholder="Chandigarh"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                 
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
        </div>
    
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Total area/ super-area as mentioned on papers
          </Typography>
          <Input
            size="lg"
            placeholder="Sq Ft"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name='total_area_super_area'
            
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
    
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Expected Price ₹
          </Typography>
          <Input
            size="lg"
            placeholder="Enter total price inclusive of GST as applicable"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            name='residentialBuy_expectedPrice'
            
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
    
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Is the price negotiable
          </Typography>
          <div className="flex gap-10">
            <Radio name="type" label="Yes" value="Yes" defaultChecked/>
            <Radio name="type" label="No" value="No" />
          </div>
    
          <Typography variant="h6" color="blue-gray" className="-mb-5">
            Upload property image
          </Typography>
        <div className='grid justify-center my-3 p-2 border border-bordercolor'>
          <input type="file" placeholder='upload property image' />
          
            <button className='flex justify-center w-full gap-3 py-1 px-2 mt-5 rounded-md text-white bg-black hover:bg-green duration-300' type='button' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
            </svg>
              Upload Image
            </button>
            
    
        </div>
    
    
        {/* User Information Prefilled */}  
    
        <div className='px-3 py-7 rounded-xl border border-bordercolor'>
        <Typography variant="h6" color="blue-gray" className="mb-3 border-b-4 border-red text-center">
            User Details
          </Typography>
    
          {/* User name */}
        <Typography variant="h6" color="blue-gray" className="mb-3">
            Your Name
          </Typography>
          <Input type='text' disabled/>
    
          {/* Phone No */}
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Phone no.
          </Typography>
          <Input type='text' disabled/>
    
    
          {/* Email */}
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Email
          </Typography>
          <Input type='text' disabled/>
    
          <p className='text-xs py-5'>
            {
              `(goodplots.com partner broker may call you for further inquiry, verification, sale assistance, scheduling viewing appointments with buyers, informing about our broking services, finalizing terms of engagement with goodplots.com, etc.)`
            }
          </p>
        </div>            
        
    
    
        </div>
        
        <Button className="mt-6" fullWidth type='submit'>
          Submit
        </Button>
        
      </form>
    </Card>
    <Kyc/>
    </div>
      )
}

export default CommercialBuy