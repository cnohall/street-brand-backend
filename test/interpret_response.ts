import { InterpretResponse } from '../src/services/interpret-response';
import {expect} from 'chai';
import { response } from 'express';

let N_testResponse = { 
    "verifyDocumentResult": {"type": "DriverLicenceResponse"}, 
    "verificationRequestNumber": 512, 
    "verificationResultCode": "N" 
} 

let S_testResponse = {
    "verifyDocumentResult": {"type": "DriverLicenceResponse"}, 
    "verificationRequestNumber": 512, 
    "verificationResultCode": "S" 
} 


let Unknown_testResponse:any = { 
    "verifyDocumentResult": {"type": "DriverLicenceResponse"}, 
    "verificationRequestNumber": 512, 
    "verificationResultCode": "K" 
} 
 
    
describe('InterpretResponse: N_testResponse', () => {
    it(`Should return 'kycResult': false`, ()=> {
        expect(InterpretResponse(N_testResponse)).to.deep.equal({'kycResult': false})
    })
})

describe('InterpretResponse: S_testResponse', () => {
    it(`Should return {'code': 'S','message': 'Server Error'}`, ()=> {
        expect(InterpretResponse(S_testResponse)).to.deep.equal({'code': 'S','message': 'Server Error'})
    })
})

describe('InterpretResponse: Unknown_testResponse', () => {
    it(`Should return 'error': 'Something is wrong with the verification result code'`, ()=> {
        expect(InterpretResponse(Unknown_testResponse)).to.deep.equal({'error': 'Something is wrong with the verification result code'})
    })
})

