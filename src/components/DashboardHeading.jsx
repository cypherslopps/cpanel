import React from 'react'
import { Title } from '@tremor/react';

const DashboardHeading = ({ title, subHeading }) => {
  return (
    <header>
        <Title className='text-[.98rem] xxs:text-[1.1rem] xs:text-lg font-bold'>{title}</Title>
        {subHeading && (
          <p className='text-[.79rem] xxs:text-[.82rem] xs:text-sm sm:w-9/12 lg:w-1/2 text-gray-700/80'>{subHeading}</p>
        )}
    </header>
  )
}

export default DashboardHeading