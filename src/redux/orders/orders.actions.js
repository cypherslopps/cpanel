import axios from 'axios';
import OrdersActionTypes from './orders.types';
import { addNewOrdersApi, getAllOrdersApi, filterOrdersByStatusApi } from '../../config';

const ordersPending = () => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_PENDING
}); 

const addNewOrderSuccess = orders => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_SUCCESS,
	payload: orders
}); 

const addNewOrderFailed = error => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_FAILED,
	payload: error
}); 

// Fetch all orders
// const fetchAllOrdersSuccess = orders => ({
// 	type: OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS,
// 	payload: orders
// });

export const filterOrdersByStatus = filteredOrders => ({
	type: OrdersActionTypes.FILTER_ORDERS_BY_SERVICE_CATEGORY,
	payload: filteredOrders
});

export const searchOrders = query => ({
	type: OrdersActionTypes.SEARCH_ORDERS_BY_SERVICE,
	payload: query
});

// Requests
// export const addNewOrder = orders => {
// 	return dispatch => {
// 		// Dispatch Add Order Pending State
// 		dispatch(ordersPending());

// 		// Post Request
// 		const addOrder =  axios.post(addNewOrdersApi, orders);

// 		// Await Request
// 		addOrder.then(({ data }) => {
// 			if(data.status === "success")
// 				dispatch(addNewOrderSuccess(data.data));
// 		}).catch(error => {
// 			dispatch(addNewOrderFailed('There was an error adding order'));
// 			return error
// 		});
// 	}
// }

// // Fetch all orders
// export const fetchAllOrders = userID => {
// 	return dispatch => {
// 		dispatch(ordersPending());

// 		axios.get(`${getAllOrdersApi(userID)}`).then(({ data }) => {
// 			if(data.status === "success") 
// 				dispatch(fetchAllOrdersSuccess(data.data));
// 		});
// 	}
// };

// Filter orders
// export const filterOrders = (status, userID) => {
// 	return dispatch => {
// 		const postServiceCategory = axios.post(`${filterOrdersByStatusApi(status)}`, {userID});

// 		postServiceCategory
// 			.then(({ data: { status, data }}) => {
// 				if(status === "success")
// 					dispatch(filterOrdersByStatus(data));
// 			});
// 	}
// }

// Fetch orders
export const fetchAllOrders = () => ({
	type: OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS
});

// Add new Order
export const addNewOrder = (order, type="orders") => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_SUCCESS,
	payload: {
		data: {
			id: Math.random().toString(32).substring(2),
			...order
		},
		type
	}
})