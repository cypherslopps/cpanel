import React from 'react';
import { Link } from 'react-router-dom';
import GuestNavigationLink from './GuestNavigationLink';
import { buttonVariants } from '../ui/Button';
import { navigationLinks } from '../../lib/constants';
import { APP_NAME } from "../../config";
import Hamburger from '../Hamburger';
import useStickyScroll from '../../hooks/useStickyScroll';

const GuestNavigation = ({ variant="transparent" }) => {
    const { scrollIsActive } = useStickyScroll(70);

    return (
        <nav className={`navigation w-full flex justify-center fixed top-0 left-0 z-50 transition-all duration-75 border-b border-transparent ${scrollIsActive ? "bg-clip-padding backdrop-filter border-secondary-500/10 backdrop-blur-xl bg-opacity-60 bg-[linear-gradient(180deg,_#114158 0%,_rgba(17,_65,_88,_0.8)_42.19%,_rgba(17,_65,_88,_0.3)_100%)]" : ""} ${variant === "transparent" ? "" : "shadow"}`}>
            <div className="wrapper flex justify-between py-4 md:py-5 px-2 xs:px-1 md:px-3 w-[96%] lg:w-11/12">
                <div className='flex items-center gap-x-4 md:gap-x-5 lg:gap-x-7'>
                    <Link to="/" className={`text-[1.4rem] xs:text-2xl font-extrabold leading-none ${variant === "transparent" ? "text-white text-shadow" : "text-gray-900"}`}>{APP_NAME}</Link>

                    {/* Navigation links */}
                    <ul className='hidden sm-md:flex sm-md:items-center sm-md:gap-x-3 lg:gap-x-4'>
                        {navigationLinks.map(link => (
                            <GuestNavigationLink 
                                key={link.title} 
                                variant={variant === "transparent" ? "light" : "dark"}
                                {...link}
                            />
                        ))}
                    </ul>
                </div>
                    <div className='flex items-center gap-x-2 sm:gap-x-3'>
                        <div className='hidden xs:flex xs:items-center xs:gap-x-3 sm:gap-x-4 md:gap-x-5'>
                            <Link to="/accounts/login" className={`${variant === "transparent" ? "text-white" : "text-gray-900"} active:scale-95 text-[.84rem] xs:text-sm sm:text-[.93rem] md:text-[.96rem] lg:text-md font-medium transition-transform`}>Login</Link>
                            <Link to="/accounts/register" className={`${buttonVariants({ variant: variant === "transparent" ? "subtle" : "subtle-dark", size: "sm" })}`}>Create an account</Link>
                        </div>
                    
                        <Hamburger 
                            className="inline-flex sm-md:hidden" 
                            color={variant === "transparent" ? "light" : "dark"}
                        />
                    </div>
            </div>
        </nav>
    )
}

export default GuestNavigation