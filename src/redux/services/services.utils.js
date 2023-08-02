export function getServicesCategories(services) {
    const data = Object.assign({}, services);
    const dataEntries = Object.entries(data);
    const categories = dataEntries.map(([category]) => category);
    
    return categories;
}

export function getAllServicesItem(services) {
    const data = Object.assign({}, services);
    const dataEntries = Object.entries(data);
    const allServices = dataEntries
        .map(([,data]) => data)
        .flat()
        .map(data => data.service);
    
    return allServices;
}

export function filterServicesItemByCategory(services, category) {
	const servicesItem = getAllServicesItem(services);
    const filteredServices = servicesItem.filter(service => service.includes(category));

    return filteredServices;
}

export function searchServicesByQuery(services, query) {
	const data = Object.assign({}, services);
	const servicesEntries = Object.entries(data);
    const servicesCategoryData = servicesEntries.map(([, data]) => data).flat();
    const servicesCategory = servicesEntries.map(([key]) => key);
    const existingServices = servicesCategoryData.filter(({ service }) => service.toLowerCase().includes(query.toLowerCase()));
    const serviceType = servicesCategory.filter(name => query.toLowerCase().includes(name))[0];

    if(serviceType && existingServices)
        return {[serviceType]: existingServices};
    else    
        return null;
}


export function getServiceMinMaxValues(services, serviceName) {
    const data = Object.assign({}, services);
    const servicesEntries = Object.entries(data);
    const service = servicesEntries
        .map(([,data]) => data)
        .flat()
        .filter(data => data.service.toLowerCase() === serviceName.toLowerCase())[0];
        
    return {
        max: service.max_order ?? 0, 
        min: service.min_order ?? 0
    };
}
