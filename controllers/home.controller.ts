import { HomeService } from '../services/home.service';
import express, { Application, Request, response, Response } from 'express';
import { findCity } from '../functions/findCity';
import { getHeadersUrl } from '../functions/getHeadersUrl';
import { getLocationJson } from '../functions/getLocationJson';
import { transformFlag } from '../functions/transformFlag';
import { EdgeLocations } from '../interfaces/cloudfront-edge-locations.interface';
import { ResponsePlug } from '../interfaces/responsePlug.interface';

export const HomeController = (app : Application) => {
    const router = express.Router();
    const homeService = new HomeService();

    router.get('/', (req: Request, res: Response) => {
        res.send('Fasterize API is running');
    })

    router.get('/:url', async (req: Request, res: Response) => {
        const url: string = req.params.url ;
        let error: Error = {} as Error;
    
        try {
            const responseRequestUrl =  await getHeadersUrl(url);
            const locationJson: EdgeLocations = await getLocationJson();
            const status = responseRequestUrl.status;
            const headers = responseRequestUrl.headers;
            const plug: ResponsePlug = homeService.setResponseUrlPlug(headers, status, locationJson);            
    
            res.status(200).send(plug);
    
        } catch (err) {
            error = err;
            console.error('headers', error);
            if (error.message === 'HEADER UNDEFINED') {
                return res.status(404).send(error);
            }
        }
    })

    app.use('/', router);
}
