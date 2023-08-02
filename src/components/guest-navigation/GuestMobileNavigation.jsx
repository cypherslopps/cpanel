import React from 'react'
import { Link } from 'react-router-dom';
import { buttonVariants } from '../ui/Button';
import { navigationLinks } from '../../lib/constants'
import GuestNavigationLink from './GuestNavigationLink';

const GuestMobileNavigation = ({ isOffscreenOpen, toggleOffscreen }) => {
  return (
    <nav className='flex flex-col justify-between h-full'>
      <ul className='flex flex-col gap-4 xxs:gap-5 xs:gap-6 px-2 xs:px-3'>
        {navigationLinks.map(link => (
            <GuestNavigationLink 
                key={link.title}
                isOffscreenOpen={isOffscreenOpen} 
                toggleOffscreen={toggleOffscreen}
                {...link}
            />
        ))}
      </ul>

      {/* Account links */}
      <div className='flex flex-col gap-1 xs:hidden'>
        <Link 
          onClick={toggleOffscreen}
          to="/accounts/login" 
          className={`${buttonVariants({ variant: "border" })} text-[.94rem] xs:text-[.97rem]`}
        >
          Login
        </Link>

        <Link 
          onClick={toggleOffscreen}
          to="/accounts/register" 
          className={`${buttonVariants({ variant: "subtle" })} text-[.94rem] xs:text-[.97rem]`}
        >
          Create an account
        </Link>
      </div>
    </nav>
  )
}

export default GuestMobileNavigation