import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
  Card, 
  Grid, 
  Metric, 
  Text, 
} from "@tremor/react";
import { FilterX } from "lucide-react"
import { OrdersTable, FormSearch, Input, ProtectedRoute } from '../../components';
import { selectServicesCategories } from '../../redux/services/services.selectors';
import { selectAllOrders } from '../../redux/orders/orders.selectors';
 
const orderCategories = [
  {
    title: "Welcome to our panel",
    metric: "Cypherslopps",
  },
  {
    title: "Balance spent",
    metric: "$ 0.00",
  },
  {
    title: "Panel orders",
    metric: "0",
  },
];

function Orders({ categories, orders }) {
  // Fetch all orders
  // useFetch("orders");

  return (
    <ProtectedRoute>
      <div className='space-y-5 xs:space-y-8 sm:space-y-10 lg:space-y-12'>
        <Grid numItemsSm={2} numItemsLg={3} className="gap-3 md:gap-4 lg:gap-6">
          {orderCategories.map((item) => (
            <Card key={item.title} className='bg-dark-tremor-background shadow-dark-tremor-card'>
              <Text className='text-tremor-background-subtle'>{item.title}</Text>
              <Metric className='text-white text-[1.4rem] sm:text-2xl md:text-text-tremor-metric'>{item.metric}</Metric>
            </Card>
          ))}
        </Grid>

        {/* Orders Content */}
        <section className='space-y-5'>
          {/* Action */}
          <header className='grid grid-cols-1 gap-y-1.5 sm:grid-cols-[20vw,1fr] sm:gap-x-8 md:gap-x-14 lg:gap-x-20 justify-between bg-gray-100/60 border border-gray-200/80 rounded-xl p-2.5 md:p-3'>
            <Input 
              type="select"
              placeholder="Filter by category"
              icon={FilterX} 
              className='orders-select'
              options={categories}
            />

            {/* Search orders */}
            <FormSearch type="order" />
          </header>

          {/* Table */}
          <OrdersTable userRequests={orders} />
        </section>
      </div>
    </ProtectedRoute>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectServicesCategories,
  orders: selectAllOrders
});

export default connect(mapStateToProps)(Orders)