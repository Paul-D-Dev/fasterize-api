import fetch from "node-fetch";
import { EdgeLocations } from "../interfaces/cloudfront-edge-locations.interface";

/**
 * This method fetchs data from AWS CloudFront to get IATA code to conclude of City's ping
 * @returns Object of locations
 */
export const getLocationJson = async (): Promise<EdgeLocations | any> => {
    try {
        const response = await fetch('https://www.cloudping.cloud/cloudfront-edge-locations.json');
        if (response.status >= 200 && response.status <= 299) {
            return await response.json();
        } else {
            return null;
        }
        
    } catch (error) {
        console.log(error);
        
        throw new Error("FAILED_FETCH_JSON_LOCATIONS");
    }
}