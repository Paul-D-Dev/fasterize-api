import { EdgeLocations } from "../interfaces/cloudfront-edge-locations.interface";
import fetch from "node-fetch";


/**
 * This method fetchs data from AWS CloudFront to get IATA code to conclude of City's ping
 * @returns Object of locations
 */
export const getLocationJson = async (): Promise<EdgeLocations> => {
    const location = await fetch('https://www.cloudping.cloud/cloudfront-edge-locations.json');
    let response = await location.json();
    return response;
}