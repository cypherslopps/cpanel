import axios from 'axios';
import ServicesActionTypes from './services.types';
import { getServicesApi, filterServicesByCategoryApi, searchServicesByServiceApi } from '../../config';

// export const fetchAllServicesPending = () => ({
// 	type: ServicesActionTypes.FETCH_SERVICES_Pending
// });


export const fetchAllServicesSuccess = () => ({
	type: ServicesActionTypes.FETCH_SERVICES_SUCCESS,
});

// export const fetchAllServicesFailed = errorMessage => ({
// 	type: ServicesActionTypes.FETCH_SERVICES_FAILED,
// 	payload: errorMessage
// });

export const filterServicesByCategory = category => ({
	type: ServicesActionTypes.FILTER_SERVICES_ITEMS_BY_CATEGORY,
	payload: category
});

export const searchServicesByCategorySuccess = service => ({
	type: ServicesActionTypes.SEARCH_SERVICES_BY_SERVICE,
	payload: service
});

export const getServiceMinMaxValues = service => ({
	type: ServicesActionTypes.GET_SERVICE_MIN_MAX_VALUE,
	payload: service
});


// Fetch all services request
// export const fetchServices = () => {
// 	return dispatch => {
// 		dispatch(fetchAllServicesPending());

// 		// Await response
// 		axios.get(`${getServicesApi}`)
// 			.then(({ data }) => {
// 				dispatch(fetchAllServicesSuccess({
// 					services: data,
// 					message: "Services fetch successful"
// 				}));
// 			})
// 			.catch(error => {
// 				dispatch(fetchAllServicesFailed('There was an error fetching our services'))

// 				return error;
// 			})
// 	}
// };

// Filter services category request
// export const filterServices = category => {
// 	return dispatch => {
// 		const postServiceCategory = axios.get(`${filterServicesByCategoryApi(category.toLowerCase())}`);

// 		postServiceCategory
// 			.then(({ data }) => dispatch(filterServicesByCategorySuccess(data)));
// 	}
// }

// // Search services service request
// export const searchServices = serviceName => {
// 	return dispatch => {
// 		const postServiceOption = axios.post(searchServicesByServiceApi, {serviceName});

// 		postServiceOption
// 			.then(({ data }) => {
// 				if(data.status === "success")
// 					dispatch(searchServicesByCategorySuccess(data.services))
// 			})
// 			.catch(error => console.log(error))
// 	}
// }

// Search services service request
export const searchServices = query => ({
	type: ServicesActionTypes.SEARCH_SERVICES_QUERY,
	payload: query
})