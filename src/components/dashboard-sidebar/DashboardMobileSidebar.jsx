import React from 'react'
import DashboardSidebarLink from './DashboardSidebarLink'
import { dashboardLinks } from '../../lib/constants'
import UserFundItem from '../UserFundItem'

const DashboardMobileSidebar = ({ isOffscreenOpen, toggleOffscreen }) => {
  return (
    <nav className='flex flex-col gap-6 sm:gap-4 h-full'>
      {/* User funds */}
      <div className='-space-y-0.5 px-2 xs:px-3'>
        <span className='text-xs text-white/60'>Funds</span>
        <UserFundItem className="flex xs:hidden" />
      </div>
      
      {/* Navigation Links */}
      <ul className='flex flex-col gap-4 sm:gap-5 px-2 xs:px-3'>
          {dashboardLinks.map(link => (
              <DashboardSidebarLink 
                  key={link.title}
                  isOffscreenOpen={isOffscreenOpen} 
                  toggleOffscreen={toggleOffscreen}
                  {...link}
              />
          ))}
      </ul>
    </nav>
  )
}

export default DashboardMobileSidebar