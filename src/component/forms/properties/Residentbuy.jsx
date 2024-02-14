import React, { useState } from 'react';
import { auth, db } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Card, Input, Checkbox, Button, Typography, Textarea, Radio } from "@material-tailwind/react";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


const Residentbuy = () => {

  const navigate = useNavigate();

  const postRef = collection(db, 'gp_properties');

  const userDisplayName = auth.currentUser.displayName;
  const userEmail = auth.currentUser.email;
  const userPhone = auth.currentUser.phoneNumber;

  // Set Subtype
  const[subType, setSubType] = useState()  
  function handle_SubType(value){
    setSubType(value)
  }   

  // User Details
  
  
  // Handle Form Submit
  async function handleSubmit_residentialBuy(event){
    event.preventDefault();

    const residentialBuyData = {
      propertyDetail: {
        title: event.target.residentialBuy_title.value,
        desc: event.target.residentialBuy_desc.value,
        property_subtype: event.target.residentialBuy_Subtype.value,
        address: event.target.residentialBuy_address.value,
        city: event.target.residentialBuy_city.value,
        expected_price: event.target.residentialBuy_expectedPrice.value,
        total_area: event.target.total_area_super_area.value,
        type: 'Residential Buy',

      },
      authInfo: {
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        userEmail: auth.currentUser.email
      },
      feedDetails:{
        publishedOn: serverTimestamp(),
        status: 'pending'
      }
    }

    await addDoc(postRef, residentialBuyData);
    navigate("/home")
    console.log("Residential Form Submitted successdully")
  }


  // Date Picker
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div className='grid justify-center py-20 px-40 border-bordercolor'>
        <Card color="transparent" shadow={false}>

        <div>
        <Typography
            variant="h4"
            color="blue-gray"
            className="text-center text-3xl"
          >
            Residential Buy
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal pb-5 border-b border-bordercolor"
          >
            Publish your new residential property listing on{" "}
            <span className="text-red font-semibold">GoodPlots</span>.
          </Typography>
        </div>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit_residentialBuy}>
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
          <Textarea label="Message" placeholder='1500 Sq.Yd.residential plot with easy access to essential facilities for sale in Sector 9,Chandigarh' name='residentialBuy_desc' />
        </div>

        <div className='w-96'>
            <select name="residentialBuy_Subtype" placeholder="Select Subtype" onChange={(e)=> handle_SubType(e.target.value)} className='p-4 border border-bordercolor rounded'>
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
                  placeholder="00/00"
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
                  placeholder="000"
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
 
 
        {/* User Information Prefilled */}  

        <div className='px-3 py-7 rounded-xl border border-bordercolor'>
        <Typography variant="h6" color="blue-gray" className="mb-3 border-b-4 border-red text-center">
            User Details
          </Typography>

          {/* User name */}
        <Typography variant="h6" color="blue-gray" className="mb-3">
            Your Name
          </Typography>
          <Input type='text' value={userDisplayName} disabled/>

          {/* Phone No */}
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Phone no.
          </Typography>
          <Input type='text' value={userPhone} disabled/>


          {/* Email */}
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Email
          </Typography>
          <Input type='text' value={userEmail} disabled/>


          {/* Date of birth */}
          
          <Typography variant="h6" color="blue-gray" className="mb-3">
            Date Of Birth
          </Typography>
          
          <ReactDatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date of Birth"
            className="border border-bordercolor w-full py-1 px-5 rounded focus:!border-t-gray-900"
          />

          <Typography variant="p" color="blue-gray" className="mb-3 text-xs py-3">
          (goodplots.com partner broker may call you for further inquiry, verification, sale assistance, scheduling viewing appointments with buyers, informing about our broking services, finalizing terms of engagement with goodplots.com, etc.).

          </Typography>
        </div>            
        


        </div>
        
        <Button className="mt-6" fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </Card>
    </div>
  )
}

export default Residentbuy