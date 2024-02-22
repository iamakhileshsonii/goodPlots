import React from 'react'
import {Tabs,TabsHeader,TabsBody,Tab,TabPanel,} from "@material-tailwind/react";
import {Square3Stack3DIcon,UserCircleIcon,Cog6ToothIcon,} from "@heroicons/react/24/solid";
import NewListings from './newListings';
import ActiveListings from './activeListings';
import PendingListings from './pendingListings';

const ListingTypes = () => {
    const data = [
        {
          label: "New Listings",
          value: "New Listings",
          icon: Square3Stack3DIcon,
          desc: <NewListings/>,
        },
        {
          label: "Active Listings",
          value: "Active Listings",
          icon: UserCircleIcon,
          desc: <ActiveListings/>,
        },
        {
          label: "Pending Listings",
          value: "Pending Listings",
          icon: Cog6ToothIcon,
          desc: <PendingListings/>,
        },
      ];

      // Set the default value to the value of the first item in the data array
    const defaultValue = data[0].value;

      return (
        <Tabs value={defaultValue}>
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                   <p className='text-xs'>{label}</p>
                </div>
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
      );
}

export default ListingTypes