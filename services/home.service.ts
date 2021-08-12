import { findCity } from '../functions/findCity';
import { transformFlag } from '../functions/transformFlag';
import { ResponsePlug } from '../interfaces/responsePlug.interface';
import { EdgeLocations } from '../interfaces/cloudfront-edge-locations.interface';

export class HomeService {

    public setResponseUrlPlug = (headers: any, status: number, locationJson: EdgeLocations): ResponsePlug => {
        const plug: ResponsePlug = {} as ResponsePlug;

        let flag: string | null = headers.get('x-fstrz') || null;
            const flags: string[] = transformFlag(flag);
            
            if (flags.includes('optimisée') || flags.length > 0) {
                plug.plugged = true;
            } else {
                plug.plugged = false;
            }
            plug.statusCode = status;
            if (plug.plugged) {
                const cfPop = headers?.get('x-amz-cf-pop');
                const cache = headers?.get('x-cache');
                plug.fstrzFlags = flags
                plug.cloudfrontStatus = cache?.split(' ')[0].toUpperCase() || ''
                plug.cloudfrontPOP = findCity(locationJson, cfPop)
            }
        return plug;
    }
}   