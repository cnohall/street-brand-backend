import Customer from '../interfaces/customer'

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

function InterpretResponse (response:Response): Success | VerifyDocumentError{
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
            return {
                'code': 'S',
                'message': 'Server Error'
            }
    }    
}

export {InterpretResponse}