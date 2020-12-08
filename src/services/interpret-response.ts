import Customer from '../interfaces/customer-interface'
interface Response { 
    "verifyDocumentResult": {"type": string}, 
    "verificationRequestNumber": number, 
    "verificationResultCode": string 
} 

interface Success { 
    'kycResult': boolean 
} 
interface VerifyDocumentError{ 
    'code': 'D' | 'S', 
    'message': 'Document Error' | 'Server Error' 
}
interface UnknownVerificationResultCode{ 
    'error': 'Something is wrong with the verification result code'
}

function InterpretResponse (response:Response): Success | VerifyDocumentError | UnknownVerificationResultCode{
    switch(response.verificationResultCode){
        case 'Y':
            return {"kycResult": true};
        case 'N':
            return {"kycResult": false};
        case 'D':
            return {
                'code': 'D',
                'message': 'Document Error'
            }
        case 'S':
            return {
                'code': 'S',
                'message': 'Server Error'
            }
        default:
            return {'error': 'Something is wrong with the verification result code'}
    }    
}

export {InterpretResponse}