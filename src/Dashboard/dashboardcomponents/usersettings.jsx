import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import UserProfile from './userProfile';
import Userlistings from './userlistings';
import CreateFeed from '../../component/forms/createFeed';
import ResidentialForm from '../../component/forms/residential';

const Usersettings = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');

  useEffect(() => {
    const fetchUserDetails = () => {
      if (auth.currentUser) {
        const { email, displayName } = auth.currentUser;
        setUserEmail(email || '');
        setUserDisplayName(displayName || '');
      }
    };

    fetchUserDetails();
  }, []);

  const data = [
    {
      label: "Profile",
      value: "profile",
      desc: <UserProfile/>,
    },
    {
      label: "My Listings",
      value: "my_listings",
      desc: <Userlistings/>,
    },
    {
      label: "Create Feed",
      value: "create_feed",
      desc: <CreateFeed/>,
    },
    {
      label: "Residential Form",
      value: "residential_form",
      desc: <ResidentialForm/>,
    },
  ];

  // Set the value of the first tab as the default value for the Tabs component
  const defaultValue = data.length > 0 ? data[0].value : '';

  return (
    <div className='px-20'>
      <div className='p-10'>
        {/* Add any other content here */}
      </div>

      <Tabs value={defaultValue}>
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Usersettings;
