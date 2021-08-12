import express, { Application, Request, Response } from 'express';
import { getHeadersUrl } from '../functions/getHeadersUrl';
import { getLocationJson } from '../functions/getLocationJson';
import { ResponsePlug } from '../interfaces/responsePlug.interface';
import { HomeService } from '../services/home.service';

export const HomeController = (app : Application) => {
    const router = express.Router();
    const homeService = new HomeService();

    router.get('/', (req: Request, res: Response) => {
        res.send('Fasterize API is running');
    })

    router.get('/:url', async (req: Request, res: Response) => {
        const url: string = req.params.url ;
    
        try {
            const responseRequestUrl =  await getHeadersUrl(url);            
            let locationJson = await getLocationJson();
            const status = responseRequestUrl.status;
            const headers = responseRequestUrl.headers;
            const plug: ResponsePlug = homeService.setResponseUrlPlug(headers, status, locationJson);            
    
            res.status(200).send(plug);
    
        } catch (err) {
            console.error('url request', err);
            if (err.message === 'FAILED_FECTH_HEADERS') {
                return res.status(404).send('NOT FOUND RESULT FOR THIS URL');
            }
        }
    })

    app.use('/', router);
}
