//Packages
import express from 'express';
import * as dotenv from "dotenv";
import bodyParser from 'body-parser';
import axios from 'axios'
//Interfaces
import Customer from './interfaces/customer'


dotenv.config();
const URL = process.env.API_ENDPOINT || '';
const axiosConfig = {
    headers: {
        'Authorization': 'Bearer ' + process.env.API_KEY,
        'Content-Type': 'application/json',
    }
};

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/kyc', (req, res) => {
    let customer = req.body;
    axios.post(URL, customer, axiosConfig)
    .then((result) => {
        res.json(result.data);
    })
    .catch((error)=> {
        res.json(error);
    })
});

