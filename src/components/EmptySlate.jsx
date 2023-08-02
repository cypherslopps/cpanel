import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { BaggageClaim, RefreshCcwIcon } from 'lucide-react';
import { selectServiceSearchQuery } from '../redux/services/services.selectors';
import Heading from "./ui/Heading";
import Button from "./ui/Button";

const EmptySlate = ({ query }) => {
  return (
    <div className='w-full py-10 flex flex-col gap-y-4 items-center absolute top-0 left-0'>
      <div className='w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-gray-100'>
        <BaggageClaim className='w-8 h-8 md:w-10 md:h-10 text-gray-700' />
      </div>

      {/* Content */}
      <div className='flex flex-col items-center gap-y-2'>
          <Heading size="xs" className="font-medium">No service <span className='font-extrabold'>`{query}`</span> found</Heading>
          <Button 
            width='max'
            onClick={() => window.location.reload()}
          > 
              <RefreshCcwIcon className='w-4 h-4' />
              Refresh
          </Button>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  query: selectServiceSearchQuery
});

export default connect(mapStateToProps)(EmptySlate)