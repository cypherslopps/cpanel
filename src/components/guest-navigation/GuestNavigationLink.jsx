import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GuestNavigationLink = ({ title, route, isOffscreenOpen, toggleOffscreen, variant }) => {
    const { pathname } = useLocation();
    const linkStyles = pathname === route ? `${variant === "dark" ? "text-gray-900 before-border-b before-border-b-primary" : "text-white before-border-b before-border-b-secondary"}` : `${variant === "dark" ? "text-gray-700 hover:text-gray-900 before-border-b-animated-primary" : "text-white/80 hover:text-white before-border-b-animated-secondary"} before-border-b-animated before:transition before:duration-300`;

    return (
        <li key={title} className='leading-none'>
            <Link 
                to={route} 
                onClick={() => isOffscreenOpen && toggleOffscreen()}
                className={`text-base xxs:text-[1.05rem] xs:text-[1.1rem] sm-md:text-[.85rem] lg:text-[.88rem] relative transition duration-300 ${linkStyles}`}
            >
                {title}
            </Link>
        </li>
    )
}

export default GuestNavigationLink