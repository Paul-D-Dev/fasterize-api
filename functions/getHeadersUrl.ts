import fetch from "node-fetch";

/**
 * This method allows to fetch the headers from the url request to identify plugged with fstrz
 * @param url 
 * @returns header of the request url
 */
export const getHeadersUrl = async (url: string) => {
    try {
        const healdersUrl = await fetch(url, {method: 'HEAD'});
        return healdersUrl;
    } catch (e) {
        console.error(e.message);
    }
}