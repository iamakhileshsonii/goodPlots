import React from 'react'

const commonHome = () => {
  return (
    <div>

    <div className='grid justify-center sm:py-2'>
      <h4 className='text-center'>SHOWING <span className='text-red font-semibold'>GOODPLOTS</span>&nbsp;IN</h4>
      <select name="searching_in" className='sm:py-1 sm:px-3 border border-bordercolor rounded-md'>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Haryana">Haryana</option>
        <option value="Punjab">Punjab</option>
      </select>
    </div>

    <div className='flex flex-wrap justify-center flex-row px-4 sm:px-10 py-5 sm:py-20 gap-4 sm:gap-5'>
     
      <div className='w-9/11 sm:w-1/5 border border-bordercolor p-3 rounded-md'>
        <h4 className='text-center text-red font-semibold tracking-widest'>RESIDENTIAL</h4>
        <p className='text-center'>House | Appartment | Cottages
            Plot Land | Builder Floor
            Studio | Duplex Penthouse
        </p>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-red hover:underline'>BUY</p>
          <p>|</p>
          <p className='font-semibold text-red hover:underline'>RENT</p>
        </div>
      </div>

      <div className='w-9/11 sm:w-1/5 border border-bordercolor p-3 rounded-md'>
        <h4 className='text-center text-red font-semibold tracking-widest'>COMMERCIAL</h4>
        <p className='text-center'>Shop | Showroom | Plot
Land | Builder Bareshell
Office Space Warehouse
Co-Working | Hotel | Hospital
        </p>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-red hover:underline'>BUY</p>
          <p>|</p>
          <p className='font-semibold text-red hover:underline'>RENT</p>
        </div>
      </div>

      <div className='w-9/11 sm:w-1/5 border border-bordercolor p-3 rounded-md'>
        <h4 className='text-center text-red font-semibold tracking-widest'>INDUSTRIAL</h4>
        <p className='text-center'>Plot | Shed | Warehouse
Factory | Unit | Land
Cold Storage | Zoning
Buy | Rent
        </p>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-red hover:underline'>BUY</p>
          <p>|</p>
          <p className='font-semibold text-red hover:underline'>RENT</p>
        </div>
      </div>

      <div className='w-9/11 sm:w-1/5 border border-bordercolor p-3 rounded-md'>
        <h4 className='text-center text-red font-semibold tracking-widest'>AGRICULTURE</h4>
        <p className='text-center'>Shop | Showroom |
Plot Bareshell | Office Space
Warehouse| Co-working |
Buy | Rent
        </p>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-red hover:underline'>BUY</p>
          <p>|</p>
          <p className='font-semibold text-red hover:underline'>RENT</p>
        </div>
      </div>

      <div className='w-9/11 sm:w-1/5 border border-bordercolor p-3 rounded-md'>
        <h4 className='text-center text-red font-semibold tracking-widest'>RIVERBED</h4>
        <p className='text-center'>Silt & Mining Sites | Fishery
Hotel | Pond | Land
Builder Bareshell
Office Space Warehouse
        </p>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-red hover:underline'>BUY</p>
          <p>|</p>
          <p className='font-semibold text-red hover:underline'>RENT</p>
        </div>
      </div>

      <div className='w-9/11 sm:w-1/5 border border-bordercolor p-3 rounded-md'>
        <h4 className='text-center text-red font-semibold tracking-widest'>ISLAND</h4>
        <p className='text-center'>Shop | Showroom | Plot
Land | Builder Bareshell
Office Space Warehouse
School
        </p>
        <div className='flex justify-between py-2'>
          <p className='font-semibold text-red hover:underline'>BUY</p>
          <p>|</p>
          <p className='font-semibold text-red hover:underline'>RENT</p>
        </div>
      </div>
    </div>


    </div>
  )
}

export default commonHome