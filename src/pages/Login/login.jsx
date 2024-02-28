import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import loginBg from '../../assets/images/loginBg.jpg';
import Googleauth from '../../auth/googleAuth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false)

  const signIn = async (e) => {
    e.preventDefault();
    
    try {
      // Use Firebase authentication to sign in
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuth(true);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid justify-center py-48' 
      style={{
        backgroundImage:`url(${loginBg})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      }}>

      <form onSubmit={signIn} action="#" method="post">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" label="Password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type='submit'>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/register"
                variant="small"
                className="ml-1 font-bold text-red"
              >
                Sign up
              </Typography>
            </Typography>
            <Googleauth/>
          </CardFooter>

         
        </Card>
      </form>
    </div>
  );
};

export default Login;
