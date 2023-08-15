import React from 'react';
import { Link } from 'react-router-dom';
import UserFundItem from './UserFundItem';
import Hamburger from './Hamburger';
import Button from './ui/Button';
import { APP_NAME } from "../config";
import { useAuth } from '../providers/AuthProvider';

function DashboardNavigation() {
  const { logout } = useAuth();

  return (
    <nav className='navigation flex justify-between items-center px-1 py-2 sm:p-4 border-b border-gray-200 z-50'>
      {/* Logo */}
      <Link className='text-[1.4rem] xs:text-2xl font-extrabold transition-transform duration-75 focus:scale-95' to="/dashboard">{APP_NAME}</Link>

      {/* Info */}
      <div className='flex items-center gap-x-2 sm:gap-x-3'>
        <UserFundItem className='hidden xs:flex' />
        <Button 
          size="sm"
          className="sm:px-[.7rem] sm:text-[.85rem] rounded-md"
          onClick={logout}
        >Logout</Button>
        <Hamburger className="inline-flex md:hidden" />
      </div>
    </nav>
  )
}

export default DashboardNavigation