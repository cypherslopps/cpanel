import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as TelegramIcon } from "../assets/svg/telegram-fill-white.svg";

const TelegramButton = () => { 
  return (
    <Link 
        className='fixed bottom-4 right-3 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-teal-600 to-blue-400 shadow animate-bounce z-40'
        to="https://t.me/frozymelon"
        target='_blank'
    >
      <TelegramIcon className='w-7 h-7 stroke-white' />
    </Link>
  )
}

export default TelegramButton