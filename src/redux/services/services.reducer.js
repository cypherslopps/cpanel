import { 
	filterServicesItemByCategory ,
	searchServicesByQuery,
	getServiceMinMaxValues
} from './services.utils';
import { servicesData } from './services.data';
import ServicesActionTypes from './services.types';

const initialState = {
	services: [],
	servicesNames: [],
	categories: [],
	minmax: {
		min: 0,
		max: 0
	},
	status: 'idle',
	error: null,
	message: null,
	searchQuery: null
};


function servicesReducer(state = initialState, action) {
	switch(action.type) {
		case ServicesActionTypes.FETCH_SERVICES_PENDING:
			return {
				...state,
				status: 'pending'
			}
		case ServicesActionTypes.FETCH_SERVICES_SUCCESS:
			return {
				...state,
				services: [].concat(servicesData),
				categories: [...servicesData].map(service => service.title),
				servicesNames: [...servicesData].map(service => service.name),
				minmax: Object.assign({}, {
					min: 0,
					max: 0
				}),
				status: 'success'
			}
		case ServicesActionTypes.FETCH_SERVICES_FAILED:
			return {
				...state,
				status: 'failed',
				error: action.payload
			}
		case ServicesActionTypes.FILTER_SERVICES_ITEMS_BY_CATEGORY:
			return {
				...state,
				servicesNames: filterServicesItemByCategory(state.services, action.payload),				
			}
		case ServicesActionTypes.SEARCH_SERVICES_QUERY:
			return {
				...state,
				services: searchServicesByQuery(servicesData, action.payload),
				searchQuery: action.payload,				
				status: 'success'
			}
		case ServicesActionTypes.GET_SERVICE_MIN_MAX_VALUE:
			return {
				...state,
				minmax: getServiceMinMaxValues(state.services, action.payload)
			}
		default:
			return state
	}
}

export default servicesReducer;