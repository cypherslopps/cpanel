import React from 'react'
import Input from './ui/Input'
import APITable from './tables/APITable'

const APIResponseBlock = ({ title, selectOption, responseData }) => {
    return (
        <blockquote className='space-y-2'>
            <header className='grid grid-cols-1 gap-y-2.5 xs:grid-cols-[max-content,1fr] xs:gap-x-6 md:gap-x-12 xs:items-center'>
                <h4 className="text-base xs:text-lg md:text-xl font-semibold">{title}</h4>

                {/* Select option */}
                {selectOption && (
                    <Input 
                        type="select"
                        name="apiSelectInput"
                        placeholder="Select API Option"
                        options={selectOption}
                    />
                )}
            </header>

            <APITable 
                tableHead={["Parameters", "Description"]} 
                tableBody={responseData} 
            />
        </blockquote>
    )
}

export default APIResponseBlock