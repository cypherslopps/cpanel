import React from 'react';
import { DollarSignIcon } from 'lucide-react';
import { buttonVariants } from '../ui/Button';
import EmptySlate from '../EmptySlate';
import { capitalizeFirstLetter } from '../../lib/utils';
import { useModal } from '../../providers/ModalProvider';

function ServicesTable({ tableHead, tableBody }) {
  const { toggleModal, setData } = useModal();

  return (
    <div className='w-full overflow-x-auto rounded-md border border-gray-100'>
      <table className='w-[75rem] sm:w-[80rem] lg:w-full border-collapse'>
        <thead className='text-left bg-code-body'>
          <tr>
            {tableHead.map(head => (
              <th
                key={head} 
                className='text-code-key px-4 py-3 md:p-4 text-[.9rem] sm:text-[.92rem] md:text-md font-medium'
              >{capitalizeFirstLetter(head.replace("_", " "))}</th>
            ))}
          </tr>
        </thead>
        
        {/* Table body */}
        <tbody className={`${tableBody.length ? "" : "relative h-64 xs:h-60 md:h-80"}`}>
          {tableBody.length > 0 ? (
            tableBody.map(({ id, name, title, rate, min_order, max_order, avg_time, description }) => (
                <>
                  <tr className="title" key={title}>
                    <td colSpan='7'>
                      <p className="py-2 px-3 bg-primary-500  rounded-[.2rem] my-1 text-white text-base sm:text-md">{capitalizeFirstLetter(title)}</p>
                    </td>
                  </tr>

                  <tr key={id} className='space-y-2'>
                    <td className='px-4 md:px-4 text-sm font-bold'>{id}</td>
                    <td className='px-4 md:px-4 text-sm'>{capitalizeFirstLetter(name)}</td>
                    <td className="figure px-4 md:px-4 text-sm flex items-center font-bold text-teal-600">
                      <DollarSignIcon className='h-3 w-3' />
                      {rate}
                    </td>
                    <td className="figure font-bold px-4 md:px-4 text-sm">{min_order}</td>
                    <td className="figure font-bold px-4 md:px-4 text-sm">{max_order}</td>
                    <td className='px-4 md:px-4 text-sm'>{avg_time}</td>
                    <td className='px-4 md:px-4 text-sm flex justify-end'>
                      <span 
                        className={`${buttonVariants({ variant: "default", size: "xs" })} w-max`}
                        onClick={() => {
                          // Toggle modal
                          toggleModal();
                          
                          // Set service data
                          setData({ service: name, description });
                        }}
                      >View</span>
                    </td>
                  </tr>
                </>
            ))) : (
              <EmptySlate />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ServicesTable