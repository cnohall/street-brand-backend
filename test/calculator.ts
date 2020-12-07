import {Calculator, Adder} from '../src/calculator';
import {expect} from 'chai';

const number = 7;
const a = 5;
const b = 12;

describe('calculator', () => {
    it('should return passed in value', ()=> {
        expect(Calculator(number)).to.equal(number)
    })
})

describe('adder', () => {
    it('Should return sum', ()=> {
        expect(Adder(a, b)).to.equal( a + b )
    })
})
