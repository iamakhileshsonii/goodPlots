import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import City from './Fields/City';
  import PostedBy from './Fields/PostedBy';
  import ListingType from './Fields/ListingType';
  import ChooseCategory from './Fields/ChooseCategory';


const Filter = () => {
    const data = [
        {
          label: "City",
          value: "City",
          desc: <City/>,
        },
        {
          label: "Posted By",
          value: "Posted By",
          desc: <PostedBy/>,
        },
        {
          label: "Listing Type",
          value: "Listing Type",
          desc: <ListingType/>,
        },
        {
          label: "Choose Category",
          value: "Choose Category",
          desc: <ChooseCategory/>,
        },
       
      ];
  return (
    <Tabs value={data[0].value} orientation="vertical">
    <TabsHeader className="w-44">
      {data.map(({ label, value }) => (
        <Tab key={value} value={value} className='text-base text-left'>
          {label}
        </Tab>
      ))}
    </TabsHeader>
    <TabsBody>
      {data.map(({ value, desc }) => (
        <TabPanel key={value} value={value} className="py-0">
          {desc}
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>
  )
}

export default Filter