import React, { useEffect, useState, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { DashboardHeading, Input, Button, ProtectedRoute } from '../../components';
import useForm from '../../hooks/useForm';
import { filterServicesByCategory, getServiceMinMaxValues } from '../../redux/services/services.actions';
import { selectServicesCategories, selectServicesItems, selectServicesMinMaxValue } from '../../redux/services/services.selectors';
import { validateText, validateOrderQuantity, isValid } from '../../lib/validation';
import { addNewOrder } from '../../redux/orders/orders.utils';


function BookOrder({ categories, servicesItems, minMaxValue }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const {formInputs: bookOrder, setFormInputs: setBookOrder, handleChange} = useForm({
    link: "",
    quantity: "",
    averageTime: "",
    charge: ""
  });
  const [serviceMinValue, setServiceMinValue] = useState(0);
  const [serviceMaxValue, setServiceMaxValue] = useState(0);
  const [categoryError, setCategoryError] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [linkError, setLinkError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [averageTimeError, setAverageTimeError] = useState("");
  const [chargeError, setChargeError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const servicesData = useCallback(() => {
    if(category) {
      dispatch(filterServicesByCategory(category));

      // Dispatch action if service value is provided
      service && dispatch(getServiceMinMaxValues(service));
    }
  }, [category, dispatch, service]);

  useEffect(() => {
    servicesData();
  }, [servicesData]);

  // Set min max values
  useEffect(() => {
    if(Object.keys(minMaxValue).every(val => Boolean(val)) && service) {
      // Set min max values
      setServiceMinValue(minMaxValue.min);
      setServiceMaxValue(minMaxValue.max);
    }
  }, [minMaxValue, service]);


  // Calculate charge
  const setCharge = (value) => setBookOrder({ ...bookOrder, charge: value });

  // Submit order
  async function submitNewOrder(e) {
    e.preventDefault();

    const formData = {
      ...bookOrder,
      category,
      service
    }

    if(isValid(formData) && !categoryError && !serviceError && !quantityError && !linkError && !averageTimeError && !chargeError) {
      // Set loading state to true
      setIsLoading(true);

      try { 
        // Adding new order
        dispatch(addNewOrder(
          formData,
          "orders"
        ));
      } catch(error) {
        return error;
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
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
          <form className='flex flex-col gap-y-3' onSubmit={submitNewOrder}>
            <Input 
              label="Categories"
              name="category"
              type="select"
              options={categories}
              placeholder="Select service category"
              onChange={setCategory}
              onBlur={() => validateText(category, setCategoryError, "Select category")}
              value={category}
              error={categoryError}
            />

            <Input 
                label="Service"
                name="service"
                type="select"
                options={servicesItems}
                placeholder="Select service"
                value={service}
                onChange={setService}
                onBlur={() => validateText(service, setServiceError, "Select service")}
                disabled={!category}
                error={serviceError}
            />
            
            <Input 
              label="Link"
              name="link"
              placeholder="https://t.me/username | @username"
              onChange={handleChange}
              onBlur={() => validateText(bookOrder.link, setLinkError, "Add your telegram username or link", /(https:\/\/t.me\/[\w]+|(@[a-z]+))/ig)}
              value={bookOrder.link}
              error={linkError}
            />

            <Input 
              label="Quantity"
              name="quantity"
              info={`Min: ${serviceMinValue} - Max: ${serviceMaxValue}`}
              placeholder="0.00"
              onChange={handleChange}
              onBlur={() => validateOrderQuantity(bookOrder.quantity, setQuantityError, serviceMinValue, serviceMaxValue, setCharge)}
              value={bookOrder.quantity}
              disabled={service ? false : true}
              error={quantityError}
            />

            <Input 
              label="Average Time"
              name="averageTime"
              placeholder="Add average time"
              onChange={handleChange}
              onBlur={() => validateText(bookOrder.averageTime, setAverageTimeError, "Add a valid time", /^([\d\s]+(hours|hour)?)(\s[\d\s]+(min|minutes|minute))?$/ig)}
              value={bookOrder.averageTime}
              error={averageTimeError}
            />

            <Input 
              label="Charge"
              name="charge"
              placeholder="0.00"
              onChange={handleChange}
              value={bookOrder.charge}
              disabled={true}
              error={chargeError}
            />

            <Button isLoading={isLoading}>Book order</Button>
          </form>
        </section>
      </section>
    </ProtectedRoute>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectServicesCategories,
  servicesItems: selectServicesItems,
  minMaxValue: selectServicesMinMaxValue
})

export default connect(mapStateToProps)(BookOrder)