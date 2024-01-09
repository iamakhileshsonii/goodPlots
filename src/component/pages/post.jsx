import React from 'react';
import featureImg from '../../assets/images/Bg_cover.jpeg'

const Post = () => {
  return (
    <div className='block p-10'>
        <div className=''>
            <img src={featureImg} alt="Feature Img" className='w-full max-h-11 object-cover'/>
        </div>

        <div className='flex'>
            <div className='w-1/2 border border-bordercolor p-5'>
                Left Side Content
            </div>
            <div className='w-1/4 border border-bordercolor p-5'>
                Right Side Content
            </div>
        </div>
    </div>
  )
}

export default Post