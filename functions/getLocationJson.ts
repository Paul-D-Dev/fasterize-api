import fetch from "node-fetch";
import { EdgeLocations } from "../interfaces/cloudfront-edge-locations.interface";

/**
 * This method fetchs data from AWS CloudFront to get IATA code to conclude of City's ping
 * @returns Object of locations
 */
export const getLocationJson = async (): Promise<EdgeLocations> => {
    try {
        const locations = await fetch('https://www.cloudping.cloud/cloudfront-edge-locations.json');
        let response = await locations.json();     
        return response;
    } catch (error) {
        throw new Error("FAILED_FETCH_JSON_LOCATIONS");
    }
}