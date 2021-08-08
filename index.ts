import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { getHeadersUrl } from './functions/getHeadersUrl';
import { getLocationJson } from './functions/getLocationJson';
import { EdgeLocations } from './interfaces/cloudfront-edge-locations.interface';

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


})

app.listen(PORT, () => {
    console.log(`Server is runnig at localhost${PORT}`);
})