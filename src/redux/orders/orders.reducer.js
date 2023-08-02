import OrdersActionTypes from './orders.types';
import { searchOrders, addNewOrder } from './orders.utils';

const initialState = {
	orders: [],
	status: 'idle',
	error: null,
	message: null,
	searchQuery: null
};


function ordersReducer(state=initialState, action) {
	switch(action.type) {
		case OrdersActionTypes.ORDERS_STATUS_PENDING:
			return {
				...state,
				status: 'pending',
				error: null,
				message: null
			}
		case OrdersActionTypes.ADD_NEW_ORDER_SUCCESS:
			return {
				...state,
				orders: addNewOrder(action.payload),
				status: 'success',
			}
		case OrdersActionTypes.ADD_NEW_ORDER_FAILED:
			return {
				...state,
				errors: action.payload,
				status: 'failed'
			}
		case OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS:
			return {
				...state,
				orders: [].concat(action.payload.data),
				message: action.payload.message,
				status: 'success',	
			}
		case OrdersActionTypes.FILTER_ORDERS_BY_SERVICE_CATEGORY:
			return {
				...state,
				orders: [].concat(action.payload),				
				status: 'success'
			}
		case OrdersActionTypes.SEARCH_ORDERS_BY_SERVICE:
			return {
				...state,
				orders: searchOrders(state.orders, action.payload),				
				status: 'success',
				searchQuery: action.payload
			}
		default:
			return state
	}
} 

export default ordersReducer;