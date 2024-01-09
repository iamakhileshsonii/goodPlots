import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { auth, db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SetupProfile = () => {
  const userRef = collection(db, "gp_users");
  const navigate = useNavigate();

  async function handleSubmitUser(event) {
    event.preventDefault();

    const userInfo = {
      userId: auth.currentUser.uid,
      userName: auth.currentUser.displayName,
      userRole: event.target.GpUser_role.value,
      userPhone: event.target.GpUser_phone.value,
      userCity: event.target.GpUser_city.value,
      userGender: event.target.GpUser_gender.value,
    };

    await addDoc(userRef, userInfo);
    navigate("/usersettings");
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
          <div className="flex w-full flex-col gap-6 py-7">
            <Select
              variant="standard"
              label="I'm a"
              className="text-red font-semibold text-xl"
              name="GpUser_role"
            >
              <Option value="Broker">Broker</Option>
              <Option value="Buyer/Seller">Buyer/ Seller</Option>
            </Select>
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
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="goodplots@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="GpUser-email"
              labelProps={{
                className: "before:content-none after:content-none ",
              }}
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
              }}
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
              }}
            />

            <div className="w-full">
              <Select label="Gender" size="lg" name="GpUser_gender">
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="others">Others</Option>
              </Select>
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-red" fullWidth type="submit">
            Submit
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SetupProfile;
