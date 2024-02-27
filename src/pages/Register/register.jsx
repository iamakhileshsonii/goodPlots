import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import registerBg from '../../assets/images/registerBg.avif'

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const signUp = async (e) => {
    e.preventDefault();

    try {
      // Use Firebase authentication to create a new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid justify-center py-48'
    style={{
      backgroundImage:`url(${registerBg})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <form onSubmit={signUp}>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" className='text-white'>
              Register
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type='submit'>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="/login"
                variant="small"
                className="ml-1 font-bold text-red">
                Sign in
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default Register;
