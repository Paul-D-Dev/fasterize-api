import { EdgeLocations } from "../interfaces/cloudfront-edge-locations.interface";

/**
 * This method is used to transform IATA Code to city's name.
 * @param locations Json of IATA code
 * @param code IATA code
 * @returns name of the city || ''
 */
export const findCity = (locations: EdgeLocations, code: string ) => {
    if (code !== null) {
        return locations.nodes[code.substring(0,3)].city;
    } else {
        return '';
    }
}