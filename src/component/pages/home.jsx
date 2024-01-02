import React from 'react';
import Left from './left';
import Right from './right';
import Center from './center';

const Home = () => {
  return (
    <>
    <div className='flex justify-evenly flex-wrap py-5 px-5 '>
        <div className='w-1/4 block text-center '><Left/></div>
        <div className='w-1/2 block text-center border-x border-bordercolor min-h-screen py-0 px-5'><Center/></div>
        <div className='w-1/4 block text-center' ><Right/></div>
    </div>
    </>
  )
}

export default Home