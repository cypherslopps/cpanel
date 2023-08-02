import React, { Suspense } from 'react';
import { CopyBlock, noctisViola } from "react-code-blocks";
import APIResponseBlock from './APIResponseBlock';

const APIDataBlock = ({ title, selectOption, responseData, code }) => {
  return (
    <div className='space-y-8'>
        <APIResponseBlock 
            title={title}
            responseData={responseData}
            selectOption={selectOption}
        />

        {/* Code block */}
        <div className='space-y-2'>
            <h5 className='text-sm md:text-md font-semibold text-gray-800'>Example Response</h5>

            <Suspense fallback="Loading">
                <CopyBlock 
                    text={code}
                    className="code-block"
                    language='javascript'
                    customStyle={{
                        fontSize: '.875rem',
                        fontFamily: 'noto mono',
                    }}
                    codeContainerStyle={{ height: '25rem' }}
                    showLineNumbers={true}
                    theme={noctisViola}
                    codeBlock
                    wrapLines
                />
        </Suspense>           
        </div>
    </div>
  )
}

export default APIDataBlock