import React from 'react';
import { DollarSign } from "lucide-react";
import { cn } from "../lib/utils";
import { useAuth } from '../providers/AuthProvider';


const UserFundItem = ({ className }) => {
  const { user } = useAuth();

  return (
    <div className={`${cn(className)} items-center font-bold text-primary-500 text-xl xs:text-base`}>
      <DollarSign className='w-5 h-5 xs:w-4 xs:h-4' />
      {user?.funds ?? "0.00"}
    </div>
  )
}

export default UserFundItem