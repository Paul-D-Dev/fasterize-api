import cors from 'cors';
import express from 'express';
import { HomeController } from './controllers/home.controller';
const app = express();
const PORT = 3004;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

HomeController(app);


app.listen(PORT, () => {
    console.log(`Server is runnig at localhost${PORT}`);
})