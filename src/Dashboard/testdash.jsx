import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Profilesetting from "./dashboardcomponents/profilesetting";
import Userlistings from "./dashboardcomponents/userlistings";
import Usersettings from "./dashboardcomponents/usersettings";


const Testdash = () => {
    const data = [
        {
          label: "Profile",
          value: "Profile",
          icon: 'Square3Stack3DIcon',
          desc: <Profilesetting/>,
        },
        {
          label: "Listings",
          value: "Listings",
          icon: 'UserCircleIcon',
          desc: <Userlistings/>,
        },
        {
          label: "Settings",
          value: "settings",
          icon: 'Cog6ToothIcon',
          desc: <Usersettings/>,
        },
      ];
  return (
    <Tabs value="dashboard" orientation="vertical">
      <TabsHeader className="w-40">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="place-items-start">
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5 text-left" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid justify-center min-h-screen">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}

export default Testdash