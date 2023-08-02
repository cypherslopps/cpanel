import React, { useState } from 'react';
import { DashboardHeading, Input, Button, ProtectedRoute } from '../../components'
import { validateMassOrder } from '../../lib/validation';

function MassOrder() {
    const [massOrder, setMassOrder] = useState("");
    const [massOrderError, setMassOrderError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function addMassOrder(e) {
      e.preventDefault();

      if(massOrder && !massOrderError) {
        // Set loading state to true
        setIsLoading(true);

        try { 
          console.log("adding mass order");
        } catch(error) {
          return error;
        } finally {
          setTimeout(() => setIsLoading(false), 500);
        }
      }
    }

    return (
      <ProtectedRoute>
        <section className='space-y-3 xs:space-y-4 md:space-y-6'>
          <DashboardHeading 
            title="Mass Order"
              subHeading="Lorem ipsum, dolor sit amet consectetur. adipisicing elit. Maxime nihil praesentium natus ullam odit."
          />

          <section className='w-full sm:w-5/6 lg:w-8/12 mt-4 sm:mt-8'>
            <form className='space-y-3' onSubmit={addMassOrder}>
                <Input 
                  type="textarea"
                  label="One Order Per Line In Order"
                  name="massOrder"
                  info="Add multiple orders by seperating it with a comma"
                  placeholder="service_id | link | quantity"
                  value={massOrder}
                  onChange={({ target }) => setMassOrder(target.value)}
                  onBlur={() => validateMassOrder(massOrder, setMassOrderError)}
                  error={massOrderError}
                />

                <Button isLoading={isLoading}>Book mass order</Button>
            </form>
          </section>
        </section>
      </ProtectedRoute>
    )
}

export default MassOrder