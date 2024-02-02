import React from 'react';
import AuthData, { propertyData } from '../../auth/AuthData';

const Testpage = () => {
    const {authInfo, propertyDetail, feedDetails} = propertyData
  return (
    <div>
        <h6>{authInfo.userId}</h6>
    </div>
  )
}

export default Testpage;
