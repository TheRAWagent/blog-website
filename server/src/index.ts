import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db';
import API from './routers/API';

const app: express.Application = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api',API)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
