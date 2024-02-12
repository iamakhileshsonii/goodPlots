import React from 'react';
import { useData } from '../../context/DataContext';


const Testpage = () => {
    // Using the useData hook to access data and isLoading state
    const { gpData, isLoading } = useData();
    console.log(gpData)

    // Render loading state if data is still being fetched
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
  return (
    <div>
    <h1>Data:</h1>
    <ul>
      {gpData.map((dataItem) => (
        <li key={dataItem.id}>{dataItem.name}</li> // Assuming 'name' is one of the properties in gpData
      ))}
    </ul>
  </div>
  )
}

export default Testpage;
