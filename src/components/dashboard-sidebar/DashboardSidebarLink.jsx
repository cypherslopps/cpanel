import React from 'react'
import { 
    Link,
    useLocation 
} from 'react-router-dom'

const DashboardSidebarLink = ({ title, route, icon, isOffscreenOpen, toggleOffscreen }) => {
    const { pathname } = useLocation();
    const LinkIcon = icon;

    return (
        <li className='w-full flex items-center cursor-pointer transition-opacity duration-300 hover:opacity-90 select-none'>
            <Link 
                to={route} 
                onClick={() => isOffscreenOpen && toggleOffscreen()}
                className={`w-full relative flex items-center group py-0.5 md:py-2 md:px-3 lg:py-2.5 lg:px-3.5 tracking-[.02rem] text-md sm:text-base md:text-[.83rem] lg:text-[.87rem] gap-x-2.5 ${route === pathname ? "text-primary-400 md:before:absolute md:before:-left-2 md:before:top-0 md:before:block md:before:w-[0.2rem] md:before:h-[110%] md:before:bg-primary-400 font-medium" : "text-white/70 hover:text-white md:text-gray-700 md:hover:text-black md:hover:bg-gray-400/10"} transition-all duration-300 rounded-[.45rem]`}
            >
                <LinkIcon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 ${route === pathname ? "stroke-primary-400" : "stroke-white/70 md:stroke-gray-700 md:group-hover:stroke-black"} transition-colors duration-300`} />
                {title}
            </Link>
        </li>
    )
}

export default DashboardSidebarLink