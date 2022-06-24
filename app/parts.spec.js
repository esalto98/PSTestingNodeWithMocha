const expect = require('chai').expect;
const should = require('chai').should;
const assert = require('chai').assert;


describe('some tests',  () => {
    
    it('is true', () => {
        let result = false;

        // do something
       // expect(result).to.be.true;
        // result.should.be.false;
        assert.isFalse(result);
    });
    
});
