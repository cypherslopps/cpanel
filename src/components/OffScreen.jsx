import React from 'react'
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import Portal from './Portals'
import GuestMobileNavigation from './guest-navigation/GuestMobileNavigation';
import DashboardMobileSidebar from './dashboard-sidebar/DashboardMobileSidebar';

const OffScreen = ({ toggleOffscreen, isOffscreenOpen }) => {
    const { pathname } = useLocation();
    const hiddenStyle = pathname.includes("dashboard") ? "inline-block md:hidden" : "inline-block sm-md:hidden";

    return (
        <Portal elementId='offscreen-root' className={`${hiddenStyle} z-70 shadow`}>
            <aside className={`w-4/5 bg-tremor-content-strong xxs:w-[65%] xs:w-[55%] phone-sm:w-[45%] h-screen ${isOffscreenOpen ? "left-0" : "-left-2/4"} transition-all duration-300 relative pt-10 pb-4 px-2 xs:pt-12 xs:pb-6 xs:px-4`}>
                <span onClick={toggleOffscreen} className='absolute top-4 right-4 cursor-pointer'>
                    <X className='w-5 h-5 xs:w-6 xs:h-6 stroke-white/90' />
                </span>

                {/* Links */}
                <div className='h-full'>
                    {pathname.includes("dashboard") ? (
                        <DashboardMobileSidebar 
                            sOffscreenOpen={isOffscreenOpen}
                            toggleOffscreen={toggleOffscreen}
                        />
                    ) : (
                        <GuestMobileNavigation 
                            isOffscreenOpen={isOffscreenOpen}
                            toggleOffscreen={toggleOffscreen}
                        />
                    )}
                </div>
            </aside>
        </Portal>
    )
}

export default OffScreen