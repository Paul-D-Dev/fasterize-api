import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { findCity } from './functions/findCity';
import { getHeadersUrl } from './functions/getHeadersUrl';
import { getLocationJson } from './functions/getLocationJson';
import { transformFlag } from './functions/transformFlag';
import { EdgeLocations } from './interfaces/cloudfront-edge-locations.interface';
import { ResponsePlug } from './interfaces/responsePlug.interface';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3004;

app.get('/:url', async (req: Request, res: Response) => {
    const url: string = req.params.url;
    const locationJson: EdgeLocations = await getLocationJson();
    let responseRequestUrl: any;
    let status: number;
    let headers: Headers;
    let error: Error = {} as Error;
    const plug: ResponsePlug = {} as ResponsePlug;

    try {
        responseRequestUrl =  await getHeadersUrl(url);
        status = responseRequestUrl.status || null;
        headers = responseRequestUrl.headers;
        let flag: string | null = headers.get('x-fstrz') || null;
        console.log('flag', flag);
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

        console.log(plug);

        res.status(200).send(plug);

    } catch (err) {
        error = err;
        console.error('headers', error);
        if (error.message === 'HEADER UNDEFINED') {
            return res.status(404).send('HEADER UNDEFINED');
        }
    }

    

})

app.listen(PORT, () => {
    console.log(`Server is runnig at localhost${PORT}`);
})