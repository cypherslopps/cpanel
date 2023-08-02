import React from 'react';
import { Card } from '@tremor/react';
import { 
  apiMethods, 
  apiServiceOptionList, 
  apiAddOrder, 
  apiOrderOptionList,
  apiMultipleOrderOptionList,
  apiCreateRefillOptionList,
  apiCreateRefillStatusOptionList,
  apiUserBalanceOptionList
} from '../../lib/helpers';
import { Heading, SEO } from '../../components';
import { apiRequestType } from '../../lib/helpers';
import APIDataBlock from '../../components/APIDataBlock';
import { APP_NAME } from '../../config';

function API() {
  return (
    <>
      {/* SEO */}
      <SEO 
        title={`API | ${APP_NAME}`}
        description={`${APP_NAME} API`}
      />
      <main className='api mt-28 w-[98%] xs:w-[97%] sm:w-5/6 md:w-3/4 lg:w-[65%] mx-auto space-y-8 pb-8'>
        <header className='space-y-3'>
          <Heading size="lg">API</Heading>

          {/* Request type */}
          <Card className='bg-code-body shadow-dark-tremor-card'>
            <ul className='space-y-3'>
              {Object.entries(apiRequestType).map(([key, value]) => (
                <li key={key.toLowerCase()} className='flex items-center gap-x-2 font-notoMono text-sm'>
                  <p className='text-code-key'>{key}:</p>
                  <span className='font-medium text-code-value'>'{value}'</span>
                </li>
              ))}
            </ul>          
          </Card>
        </header>
        
        {/* API DESCRIPTION */}
        <section className='space-y-12'>
          <APIDataBlock 
            title="Service list"
            responseData={apiServiceOptionList}
            code={apiMethods}
          />

          <APIDataBlock 
            title="Add Order"
            selectOption={apiAddOrder.selectOrderOptions}
            responseData={apiAddOrder.addOrderOptions}
            code={apiMethods}
          />

          <APIDataBlock 
            title="Order Status"
            responseData={apiOrderOptionList}
            code={apiMethods}
          />

          <APIDataBlock 
            title="Multiple Order Status"
            responseData={apiMultipleOrderOptionList}
            code={apiMethods}
          />

          <APIDataBlock 
            title="Create Refill"
            responseData={apiCreateRefillOptionList}
            code={apiMethods}
          />

          <APIDataBlock 
            title="Create Refill Status"
            responseData={apiCreateRefillStatusOptionList}
            code={apiMethods}
          />

          <APIDataBlock 
            title="User Balance"
            responseData={apiUserBalanceOptionList}
            code={apiMethods}
          />
        </section>
      </main>
    </>
  )
}

export default API