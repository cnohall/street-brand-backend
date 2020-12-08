import Customer from '../interfaces/customer'

interface validation {
    valid: boolean
    message?: string
}

function CustomerValidation (customer:Customer):validation{
    const nameMaxLength = 100; 
    if (!isValidDate(customer.birthDate) || (customer.expiryDate && !isValidDate(customer.expiryDate)) ){
        return {
            valid: false,
            message: `Date must be in 'Format YYYY-MM-DD'`
        }
    } else if ( customer.familyName.length > nameMaxLength || customer.givenName.length > nameMaxLength || 
                (customer.middleName && customer.middleName.length > nameMaxLength)){
        return {
            valid: false,
            message: `Name contains more than 100 characters`
        }
    }
    return {
        valid: true,
    }
}

function isValidDate(dateString:string) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
}

export {CustomerValidation, isValidDate}