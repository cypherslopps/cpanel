import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllServicesSuccess } from '../redux/services/services.actions';
import { fetchAllOrders } from '../redux/orders/orders.actions';

function useFetch(type="services") {
    const dispatch = useDispatch();

    const allServices = useCallback(() => {
        if(type === "orders")
            return dispatch(fetchAllOrders());
        else
            return dispatch(fetchAllServicesSuccess());
    }, [type, dispatch]);

    useEffect(() => {
        allServices();
    }, [allServices]);    
}

export default useFetch;