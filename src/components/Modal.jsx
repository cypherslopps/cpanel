import React from 'react'
import { X } from 'lucide-react'
import Portal from './Portals'
import Heading from './ui/Heading';

const Modal = ({ toggleModal, isModalOpen, data }) => {
    const { service, description } = data;

    return (
        <Portal elementId='modal-root'>
            <div 
                className={`service-modal w-[96%] xs:w-11/12 sm:w-3/4 md:w-2/3 lg:w-[55%] xl:w-2/4 h-80 md:h-96 overflow-y-scroll absolute ${isModalOpen ? "top-2/4 opacity-100" : "top-2/3 opacity-0"} left-2/4 bg-white shadow border border-gray-50 rounded-md transition-all duration-500`}
                style={{ transform: "translate(-50%, -50%)" }}
            >
                <span onClick={toggleModal} className='absolute top-3 right-3 cursor-pointer'>
                    <X className='w-5 h-5 xs:w-6 xs:h-6 stroke-black' />
                </span>

                {/* Content */}
                <div className='py-2.5 px-3 space-y-6'>
                    <Heading size="xs" className="capitalize pr-4">{service}</Heading>
                    
                    {/* Description */}
                    <div className='space-y-4'>
                        {/* Features */}
                        <ul className='space-y-1'>
                            {description?.features.map(feature => (
                                <li key={feature} className='text-[.84rem] sm:text-sm'>{feature}</li>
                            ))}
                        </ul>

                        {/* Link Format */}
                        <p className='text-[.84rem] sm:text-sm text-secondary-500'>{description?.link}</p>

                        {/* Notice */}
                        <ul className='space-y-1'>
                            {description?.notice.map(notice => (
                                <li key={notice} className='text-[.84rem] sm:text-sm'>{notice}</li>
                            ))}
                        </ul>

                        {/* Start time */}
                        <p className='text-[.84rem] sm:text-sm font-medium'>{description?.start_time}</p>

                        {/* Warning */}
                        {description?.warning && (
                            <p className='text-[.84rem] sm:text-sm'>
                                <span className="font-bold">
                                    ⭕ Important:
                                </span>{" "} 
                                You must have minimum 5 posts in{" "} 
                                <span className="font-bold">Channel.</span>{" "} 
                                Subjects of <span className="font-bold">Drugs</span>/<span className="font-bold">Earnings</span>/<span className="font-bold">Scam</span>/<span className="font-bold">Cheating</span>/<span className="font-bold">Guns</span> are prohibited and orders will be cancelled.</p>
                        )}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal