import React from 'react'
import { dashboardLinks } from '../../lib/constants'
import DashboardSidebarLink from './DashboardSidebarLink'

const DashboardSidebar = () => {
  return (
    <aside className='sticky hidden md:inline-block top-0 left-0 h-screen border-r border-gray-200 py-4 px-2 lg:py-6 lg:px-2 xl:py-8 xl:px-2 bg-slate-200/50'>
        {/* Links */}
        <ul className='flex flex-col items-center gap-1'>
          {dashboardLinks.map((link) => (
            <DashboardSidebarLink 
              key={link.title}
              {...link}
            />
          ))}
        </ul>
    </aside>
  )
}

export default DashboardSidebar