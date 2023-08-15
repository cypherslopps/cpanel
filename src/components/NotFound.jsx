import React from 'react';
import { useLocation } from "react-router-dom";
import Heading from "./ui/Heading";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className={`${pathname.includes("accounts") ? "my-2" : !pathname.includes("dashboard") ? "my-28 md:my-32" : "my-20 sm:my-14 md:my-12"} flex flex-col items-center justify-center gap-y-7`}>
      <div className='space-y-12'>
        <div className='w-24 h-24 rounded-full bg-primary-500 relative before:block before:absolute before:top-[80%] before:left-[50%] before:w-[160%] before:h-[80%] before:bg-[#d9d1d10d] before:backdrop-blur-lg before:rounded-br-full before:rounded-bl-full translate-positioning' />
        <span className='bg-primary-500/10 py-1.5 px-2.5 rounded-md font-medium text-primary-500 inline-block text-sm text-center'>404 error</span>
      </div>

      {/* Content */}
      <div className='flex flex-col items-center gap-0.5'>
        <Heading size="sm" className="text-black">We've lost this page</Heading>
        <p className='text-sm sm:text-md text-gray-700 text-center'>Sorry, the page you're looking for doesn't exist or has been moved</p>
      </div>
    </div>
  )
}

export default NotFound;