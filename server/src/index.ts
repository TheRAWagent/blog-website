import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app: express.Application = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
