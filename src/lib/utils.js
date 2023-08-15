import { clsx } from "clsx";
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function checkPath(pathSegment, pathToCheck) {
    const parsedPath = pathToCheck.substr(0, pathToCheck.length);
    let lastRouteSegment = parsedPath.split("/");
    lastRouteSegment = lastRouteSegment[lastRouteSegment.length - 1] ? lastRouteSegment[lastRouteSegment.length - 1] : lastRouteSegment[lastRouteSegment.length - 2];
 
    return pathSegment === lastRouteSegment;
}

export function capitalizeFirstLetter(word) {
    const firstLetter = word.substr(0, 1);
    const remainingWords = word.substr(1, word.length);

    return firstLetter.toUpperCase() + remainingWords
}

export function getCurrentPath() {
    const path = window.location.href;
    const currentRouteIndex = path.lastIndexOf("/");
    const parsedPath = path.substr(currentRouteIndex);
    
    return parsedPath;
}

export function removeDuplicates(data) {
    const formattedData = [];
    
    data.map(dt => {
        if(formattedData.includes(dt)) return;

        formattedData.push(dt);
    });

    return formattedData;
}