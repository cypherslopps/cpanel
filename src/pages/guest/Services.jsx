import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FilterX } from "lucide-react"
import { Input, FormSearch, ServicesTable, SEO } from '../../components';
import { selectServicesCategories, selectServices } from '../../redux/services/services.selectors';
import useFetch from '../../hooks/useFetch';
import { APP_NAME } from '../../config';

function Services({ categories, services }) {
  useFetch(); 

  return (
    <>
      {/* SEO */}
      <SEO 
        title={`Services | ${APP_NAME}`}
        description="heading"
      />

<main className='mt-20 pb-2 sm:pb-4 space-y-4 md:space-y-5 p-1'>
        <header className='grid grid-cols-1 gap-y-1.5 sm:grid-cols-[15vw,1fr] gap-x-4 sm:gap-x-14 md-lg:gap-x-14 lg:gap-x-8 bg-gray-100/60 border border-gray-200/80 p-2 md:p-3'>
          <Input 
            type="select"
            placeholder="Filter by category"
            icon={FilterX} 
            className='services-select'
            options={categories}
          />
          
          <FormSearch />
        </header>

        {/* Services table */}
        <ServicesTable 
          tableHead={["Id", "Service", "Rate", "Min order", "Max Order", "Average Time", "Description"]}  
          tableBody={services}
        />
      </main>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectServicesCategories,
  services: selectServices,
})

export default connect(mapStateToProps)(Services)