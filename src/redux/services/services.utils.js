// export function getServicesCategories(services) {
//     const data = Object.assign({}, services);
//     const dataEntries = Object.entries(data);
//     const categories = dataEntries.map(([category]) => category);
    
//     return categories;
// }

// export function getAllServicesItem(services) {
//     const data = Object.assign({}, services);
//     const dataEntries = Object.entries(data);
//     const allServices = dataEntries
//         .map(([,data]) => data)
//         .flat()
//         .map(data => data.service);
    
//     return allServices;
// }

export function filterServicesItemByCategory(services, category) {
	const servicesItem = [].concat(services);
    const filteredServicesNames = 
        servicesItem
            .filter(service => service.title.includes(category))
            .map(service => service.name);
            
    return filteredServicesNames;
}

export function searchServicesByQuery(services, query) {
	const servicesItem = [].concat(services);
    const existingServices = servicesItem.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
    
    return existingServices;
}


export function getServiceMinMaxValues(services, serviceName) {
    const servicesItem = [].concat(services);
    const service = servicesItem.filter(service => service.name.toLowerCase() === serviceName.toLowerCase())[0];
        
    return {
        max: service.max_order ?? 0, 
        min: service.min_order ?? 0
    };
}
