import { createSelector } from 'reselect';
import { removeDuplicates } from '../../lib/utils';

export const selectAllServices = state => state.services;

export const selectServices = createSelector(
	[selectAllServices],
	services => services.services
)

export const selectServicesCategories = createSelector(
	[selectAllServices],
	({ categories }) => removeDuplicates(categories)
);

export const selectServicesItems = createSelector(
	[selectAllServices],
	({ servicesNames }) => servicesNames
);

export const selectServicesStatus = createSelector(
	[selectAllServices],
	({ status }) => status 
);

export const selectServicesError = createSelector(
	[selectAllServices],
	({ error }) => error 
);

export const selectServicesMinMaxValue = createSelector(
	[selectAllServices],
	({ minmax }) => minmax 
);

export const selectServiceSearchQuery = createSelector(
	[selectAllServices],
	({ searchQuery }) => searchQuery
);