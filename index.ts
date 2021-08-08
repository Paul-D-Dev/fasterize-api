import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
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

app.get('/:url', async (req: any, res: any) => {
    const url: string = req.params.url;
    const locationJson: EdgeLocations = await getLocationJson();
    const responseRequestUrl: any =  await getHeadersUrl(url);

    const status: number = responseRequestUrl.status;
    const headers = responseRequestUrl.headers;

    let flag = headers.get('x-fstrz');
    flag = transformFlag(flag);
    const cfPop = headers.get('x-amz-cf-pop');
    const cache = headers.get('x-cache');

    const plug: ResponsePlug = {
        plugged: flag?.length > 0 ? true: false,
        statusCode: status,
        fstrzFlags: flag || [],
        cloudfrontStatus: cache?.split(' ')[0].toUpperCase() || '',
        cloudfrontPOP: findCity(locationJson, cfPop)
    }
    console.log(plug);
    
    try {
        await res.status(200).send(plug);
        
    } catch (error) {
        await res.status(400).send('bad request');
    }
})

app.listen(PORT, () => {
    console.log(`Server is runnig at localhost${PORT}`);
})