import React, { useEffect, useState } from 'react';
import useLocation from '../hooks/useLocation';
import Notification from '../component/Notification';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Rename the function to start with an uppercase letter
const CommonHome = () => {
  const { loaded, coordinates, stateName } = useLocation();
  // State to hold the selected option
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    // Set the selectedLocation to stateName if loaded, else to a default value
    if (loaded) {
      setSelectedLocation(stateName);
    } else {
      setSelectedLocation('Fetching location...'); // Or any default/fallback value
    }
  }, [loaded, stateName]);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <div>
      
    <div className='grid justify-center sm:py-2'>
    <Notification/>
      <h4 className='text-center'>SHOWING <span className='text-red font-semibold'>GOODPLOTS</span>&nbsp;IN</h4>
      <select 
        name="searching_in" 
        className='sm:py-1 sm:px-3 border border-bordercolor rounded-md'
        value={selectedLocation}
        onChange={handleChange}
      >
        {/* Providing a disabled option for loading state */}
        {!loaded && <option value="Fetching location...">Fetching location...</option>}
        <option value="Chandigarh">Chandigarh</option>
        <option value="Haryana">Haryana</option>
        <option value="Punjab">Punjab</option>
      </select>
    </div>

    <div className='flex flex-wrap justify-center flex-row px-4 sm:px-10 py-5 sm:py-20 gap-4 sm:gap-5'>
     
    <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>RESIDENTIAL</h4>
        <p className='text-center mb-10'>House | Appartment | Cottages
            Plot Land | Builder Floor
            Studio | Duplex Penthouse
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>COMMERCIAL</h4>
        <p className='text-center mb-10'>Shop | Showroom | Plot Land | Builder Bareshell Office Space Warehouse Co-Working | Hotel | Hospital
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>INDUSTRIAL</h4>
        <p className='text-center mb-10'>Plot | Shed | Warehouse
Factory | Unit | Land
Cold Storage | Zoning
Buy | Rent
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>AGRICULTURE</h4>
        <p className='text-center mb-10'>Shop | Showroom |
Plot Bareshell | Office Space
Warehouse| Co-working |
Buy | Rent
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>RIVERBED</h4>
        <p className='text-center mb-10'>Silt & Mining Sites | Fishery
Hotel | Pond | Land
Builder Bareshell
Office Space Warehouse
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>ISLAND</h4>
        <p className='text-center mb-10'>Shop | Showroom | Plot
Land | Builder Bareshell
Office Space Warehouse
School
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0 '>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>


      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>RESIDENTIAL</h4>
        <p className='text-center mb-10'>House | Appartment | Cottages
            Plot Land | Builder Floor
            Studio | Duplex Penthouse
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

      <div className="w-9/11 sm:w-1/5 p-3 rounded-md relative shadow-md" style={{ boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
        <h4 className='text-center text-red font-semibold tracking-widest'>RESIDENTIAL</h4>
        <p className='text-center mb-10'>House | Appartment | Cottages
            Plot Land | Builder Floor
            Studio | Duplex Penthouse
        </p>
        <div className='flex gap-5 text-center w-full justify-center py-2 absolute bottom-0'>
        <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>BUY</p></Link>
          <p>|</p>
          <Link to="/explore/alllistings"><p className='font-semibold text-red hover:underline'>RENT</p></Link>
        </div>
      </div>

    </div>



    


    </div>
  )
}

export default CommonHome