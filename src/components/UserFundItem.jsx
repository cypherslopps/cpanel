import React from 'react';
import { Bitcoin } from "lucide-react";
import { cn } from "../lib/utils";
import { useAuth } from '../providers/AuthProvider';


const UserFundItem = ({ className }) => {
  const { user } = useAuth();

  return (
    <div className={`${cn(className)} items-center font-bold text-primary-500 text-xl xs:text-base`}>
      {user?.funds ?? "0.00"}
      <Bitcoin className='w-6 h-6 xs:w-5 xs:h-5 -rotate-[9deg]' />
    </div>
  )
}

export default UserFundItem