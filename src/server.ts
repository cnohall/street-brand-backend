//Packages
import express from 'express';
import * as dotenv from "dotenv";
import bodyParser from 'body-parser';
import axios from 'axios';
// import cors from 'cors';

//Local Files
import {CustomerValidation} from './validation/customer-validation'
import {InterpretResponse} from './services/interpret-response'
//Interfaces
import Customer from './interfaces/customer-interface'
import { check } from 'express-validator';


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
app.use(express.json());
// app.use(cors())

app.use(bodyParser.json())
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/kyc', 
  [check('birthDate').isLength({ min: 10, max: 10 }).trim().escape(),
  check('givenName').isLength({ max: 100 }).trim().escape(),
  check('middleName').isLength({ max: 100 }).trim().escape(),
  check('familyName').isLength({ max: 100 }).trim().escape(),
  check('licenceNumber').isLength({ max: 10 }).trim().escape(),
  check('stateOfIssuance').isLength({ min: 2, max: 3 }).trim().escape(),
  check('expiryDate').isLength({ min: 10, max: 10 }).trim().escape()],
  (req:any, res:any) => {
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

