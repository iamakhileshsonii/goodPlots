import React, { useState } from 'react'

const ChooseCategory = () => {

  const[selected, setSelected] = useState(false)

  const handleSelect = ()=>{
    console.log("Option Selected")
    setSelected(!selected)
  }


  return (
    <div className='flex flex-wrap gap-3'>
    <p className='bg-red text-white px-2 rounded-md' value='Residential' onClick={handleSelect}>Residential</p>
    <p className='bg-red text-white px-2 rounded-md' value='Commercial' onClick={handleSelect}>Commercial</p>
    <p className='bg-red text-white px-2 rounded-md' value='Industrial/ Factory/ Warehouse' onClick={handleSelect}>Industrial/ Factory/ Warehouse</p>
    <p className='bg-red text-white px-2 rounded-md' value='Agriculture/ Farm Land' onClick={handleSelect}>Agriculture/ Farm Land</p>
    <p className='bg-red text-white px-2 rounded-md' value='Warehouse' onClick={handleSelect}>Warehouse</p>
    <p className='bg-red text-white px-2 rounded-md' value='Farm House' onClick={handleSelect}>Farm House</p>
    <p className='bg-red text-white px-2 rounded-md' value='Fishery' onClick={handleSelect}>Fishery</p>
    <p className='bg-red text-white px-2 rounded-md' value='Farm House' onClick={handleSelect}>Farm House</p>
    <p className='bg-red text-white px-2 rounded-md' value='Poultry Farm' onClick={handleSelect}>Poultry Farm</p>
    <p className='bg-red text-white px-2 rounded-md' value='Hotel/ Resort/ Guesthouse' onClick={handleSelect}>Hotel/ Resort/ Guesthouse</p>
    <p className='bg-red text-white px-2 rounded-md' value='Educational Institution' onClick={handleSelect}>Educational Institution</p>
    <p className='bg-red text-white px-2 rounded-md' value='Island' onClick={handleSelect}>Island</p>
    <p className='bg-red text-white px-2 rounded-md' value='Riverbed' onClick={handleSelect}>Riverbed</p>
    <p className='bg-red text-white px-2 rounded-md' value='Mining Site' onClick={handleSelect}>Mining Site</p>
</div>
  )
}

export default ChooseCategory


