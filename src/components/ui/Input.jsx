import { TextInput, Select, SelectItem } from '@tremor/react'
import React from 'react'
import { capitalizeFirstLetter } from '../../lib/utils'

const Input = ({ label, error, onChange, options, info, className, ...props }) => {
  return (
    <div className='space-y-0.5' role='group'>
        {label && <label className='text-[.77rem] xxs:text-[.8rem] sm:text-[.82rem] text-gray-800'>{label}</label>}
        {
          props.type === "select" ? (
            <div className={`relative ${error ? "select-error" : ""}`}>
              <Select
                {...props}
                onValueChange={onChange}
                value={props.value}
                className={`placeholder:text-xs sm:placeholder:text-sm font-sans capitalize ${className}`}
              >
                {options.map(option => (
                  <SelectItem 
                    icon={option?.icon} 
                    key={option?.key ?? option.toLowerCase()} 
                    value={option?.key ?? option}
                  >
                    {option?.option ?? capitalizeFirstLetter(option)}
                  </SelectItem>
                ))}
              </Select>
              
              {error && <p className='tremor-TextInput-errorMessage text-sm text-rose-500 mt-1'>{error}</p>}
            </div>
          ) : props.type === "textarea" ? (
            <div role="group" className='space-y-0.5'>
              <div className='relative'>
                <textarea 
                  {...props} 
                  className={`tremor-TextInput-input w-full focus:outline-none focus:ring-2 focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted transition duration-100 bg-transparent text-tremor-default text-tremor-content-emphasis pl-4 pr-4 py-2 placeholder:text-xs sm:placeholder:text-sm font-sans h-44 relative flex items-center min-w-[10rem] outline-none rounded-tremor-default shadow-tremor-input dark:shadow-dark-tremor-input bg-tremor-background hover:bg-tremor-background-muted text-tremor-content border ${error ? "border-rose-500" : "border-tremor-border"} ${className}`} 
                  onChange={onChange}
                  resize="false"
                />

                {error && (
                  <svg className="tremor-TextInput-errorIcon text-rose-500 absolute bottom-[.82rem] right-[.85rem] h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>

              {error && <p className='tremor-TextInput-errorMessage text-sm text-rose-500 mt-1'>{error}</p>}
            </div>
          ) : (
            <TextInput 
              {...props}
              onChange={onChange}
              error={error ? true : false}
              errorMessage={error}
              className={`placeholder:text-xs sm:placeholder:text-sm font-sans ${className}`}
            />   
          )
        }
        {info && <span className='text-xs text-gray-600/80'>{info}</span>}
    </div>
  )
}

export default Input