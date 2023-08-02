import React from 'react'

const APITable = ({ tableHead, tableBody }) => {
  return (
    <div className='w-full overflow-x-auto rounded-tr-md rounded-tl-md border border-gray-100'>
        <table className='w-full border-collapse'>
            <thead className='text-left bg-code-body'>
                <tr>
                    {tableHead.map(head => ( 
                        <th key={head} className='text-code-key px-4 py-3 md:p-4 text-[.9rem] sm:text-[.92rem] md:text-md font-medium'>{head}</th> 
                    ))}
                </tr>
            </thead>

            {/* Table body */}
            <tbody>
                {tableBody.map(({ params, desc }) => (
                    <tr key={params}>
                        <td className='text-[.9rem] sm:text-[.92rem] md:text-md px-4 py-2.5 capitalize'>{params}</td>
                        <td className='text-[.9rem] sm:text-[.92rem] md:text-md px-4 py-2.5 text-gray-800'>{desc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default APITable