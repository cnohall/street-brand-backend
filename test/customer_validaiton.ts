import { isValidDate } from '../src/validation/customer-validation';
import {expect} from 'chai';

describe('isValidDate', () => {
    it('Should return true', ()=> {
        expect(isValidDate('2020-01-01')).to.equal(true)
    })
})

describe('isValidDate', () => {
    it('Should return false', ()=> {
        expect(isValidDate('2020-01-011')).to.equal(false)
    })
})

