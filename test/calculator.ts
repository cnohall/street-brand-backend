import { Adder} from './original_test/calculator';
import {expect} from 'chai';

const a = 5;
const b = 12;

describe('adder', () => {
    it('Should return sum', ()=> {
        expect(Adder(a, b)).to.equal( a + b )
    })
})
