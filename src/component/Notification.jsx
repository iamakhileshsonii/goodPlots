import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true); // Control the visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide after 5 seconds
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`bg-red text-white w-full rounded-md my-5 animate-slide-up ${!isVisible && 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out' }}>
      <p className='text-center py-1 px-4 self-center'>Read Fair Dealing Policy &nbsp; <a href="#" className='italic underline text-xs'>View Policy</a></p>
    </div>
  );
};

export default Notification;
