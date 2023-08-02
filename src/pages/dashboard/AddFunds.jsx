import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DashboardHeading, Input, Button, ProtectedRoute } from '../../components';
import { fundsPaymentOptions } from '../../lib/constants';
import { isValid, validateText } from '../../lib/validation';

function AddFunds() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethodError, setPaymentMethodError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function addFunds(e) {
    e.preventDefault();

    if(isValid({ paymentMethod, amount }) && !paymentMethodError && !amountError) {
      // Set loading state to true
      setIsLoading(true);

      try { 
        console.log("adding funds");
      } catch(error) {
        return error;
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    }
  }

  return (
    <ProtectedRoute>
      <section className='flex flex-col gap-y-3 xs:gap-y-4 md:gap-y-6'>
        <DashboardHeading 
            title="Add Funds"
            subHeading="Lorem ipsum, dolor sit amet consectetur. adipisicing elit. Maxime nihil praesentium natus ullam odit."
        />

        <section className='w-full sm:w-5/6 lg:w-8/12 mt-4 sm:mt-8'>
          <form className='flex flex-col gap-y-3' onSubmit={addFunds}>
            <Input 
              label="Payment method"
              name="paymentMethod"
              type="select"
              options={fundsPaymentOptions}
              placeholder="Coinbase"
              onChange={setPaymentMethod}
              onBlur={() => validateText(paymentMethod, setPaymentMethodError, "Select a payment method")}
              value={paymentMethod}
              error={paymentMethodError}
            />

            <Input 
                label="Amount"
                name="amount"
                placeholder="0.00" 
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                onBlur={({ target }) => validateText(target.value, setAmountError, "Add an amount", /^[\d]+$/ig)}
                error={amountError}
            />

            <div className='flex items-center gap-x-1 my-2 text-sm'>
              <p>Do you need support?</p>
              <Link to="/payment-support" className="underline text-primary-600">Telegram Payment Support</Link>
            </div>

            <Button isLoading={isLoading}>Add funds</Button>
          </form>
        </section>
      </section>
    </ProtectedRoute>
      
  )
}

export default AddFunds