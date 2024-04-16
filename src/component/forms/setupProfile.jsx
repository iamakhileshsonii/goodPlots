import React, { useState } from "react";
import { Card, Input, Button, Typography, Select, Option } from "@material-tailwind/react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SetupProfile = () => {
  const userRef = collection(db, "gp_users");
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [userRole, setUserRole] = useState("");

  // Set Gender Value
  function handleGenderChange(value) {
    setGender(value)
  }

  // Set User Role
  function handleUserRole(value){
    setUserRole(value)
  }

  // Handle Form Submit
  async function handleSubmitUser(event) {
    event.preventDefault();

    const userInfo = {
      authInfo: {
        userId: auth.currentUser.uid,
        timeStamp: serverTimestamp()
      },
      userDp: auth.currentUser.photoURL,
      userName: auth.currentUser.displayName,
      userRole: userRole,
      userEmail: event.target.GpUser_email.value,
      userPhone: event.target.GpUser_phone.value,
      userCity: event.target.GpUser_city.value,
      userGender: gender,
    };

    await addDoc(userRef, userInfo);
      navigate("/explore/alllistings");
    
  }

  return (
    <div className="grid justify-center p-20">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Welcome to <span className="text-red">GoodPlots</span> - Complete Your
        Profile
      </h2>
      <Card
        color="transparent"
        shadow={false}
        className="grid justify-center p-10"
      >
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmitUser}
        >

          <div className="flex py-4">
            <label htmlFor="userRole">I'm a</label>
            <select name="userRole" className="mx-5 border-b border-bordercolor text-red font-semibold text-lg" onChange={(e)=> handleUserRole(e.target.value)} required>
              <option disabled selected value> select your role </option>
              <option value="broker">Broker</option>
              <option value="buyer/ seller">Buyer/ Seller</option>
            </select>

          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Full Name
            </Typography>
            <Input
              size="lg"
              placeholder="Luis Markson"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="GpUser-username"
              labelProps={{
                className: "before:content-none after:content-none ",
              }} required
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="goodplots@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="GpUser_email" value={auth?.currentUser?.email}
              labelProps={{
                className: "before:content-none after:content-none ",
              }} disabled
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contact No.
            </Typography>
            <Input
              size="lg"
              placeholder="Eg: Chandigarh"
              className=" !border-t-blue-gray-200 
                    focus:!border-t-gray-900"
              name="GpUser_phone"
              labelProps={{
                className: "before:content-none after:content-none ",
              }} required
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              City
            </Typography>
            <Input
              size="lg"
              placeholder="Eg: Chandigarh"
              name="GpUser_city"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none ",
              }} required
            />


            <div className="grid">
              <label htmlFor="gender">Gender</label>
              <select name="gender" onChange={(e)=> handleGenderChange(e.target.value)} className="p-3 border border-bordercolor rounded" required>
              <option disabled selected value> select your gender </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
         
          <Button className="mt-6 bg-red" fullWidth type="submit">
            Submit
          </Button>
          
        </form>
      </Card>
    </div>
  );
};

export default SetupProfile;