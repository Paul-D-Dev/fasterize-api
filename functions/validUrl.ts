export const validUrl = (s: string): boolean => {
    try {
        const myURL = new URL(s);
        if (myURL.protocol === 'https:' || myURL.protocol === 'http:' ) {
            return true;
        } else {
            return false
        }
        
    } catch (error) {        
        return false;
    }
}

