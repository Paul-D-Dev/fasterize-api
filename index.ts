import express from 'express';

const app = express();
const PORT = 3004;

app.get('/', (req: any, res: any) => {
    res.status(200).send('Fasterize baby !');
})

app.listen(PORT, () => {
    console.log(`Server is runnig at localhost${PORT}`);
})