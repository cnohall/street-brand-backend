//Packages
import express from 'express';
import * as dotenv from "dotenv";
import bodyParser from 'body-parser';
import axios from 'axios'
//Local Files
import {CustomerValidation} from './validation/customer'
import {InterpretResponse} from './services/interpret-response'
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
    let customer: Customer = req.body;
    const validationResult = CustomerValidation(customer);

    if (!validationResult.valid){
      res.json(validationResult.message)
    } else {
      axios.post(URL, customer, axiosConfig)
      .then((response) => {
          const result = InterpretResponse(response.data);
          res.json(result);
      })
      .catch((error)=> {
          res.json(error);
      })
    }
});

