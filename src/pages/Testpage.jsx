import React from 'react'
import useLocation from '../hooks/useLocation';

const Testpage = () => {
  const { loaded, coordinates, stateName } = useLocation();

  return (
    <div>
      {
        loaded ? stateName : "..."
      }
    </div>
  )
}

export default Testpage