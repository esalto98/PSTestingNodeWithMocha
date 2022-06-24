let order = require('./order');
let expect = require('chai').expect;


describe('order', function () {
    
    // it('should call the callback with a true value', function (done) {
    //     let cart = {};
    //     let success;

    //     let cb = (p1) => {
    //         success = p1;
    //         expect(success).to.be.true;
    //         done();
    //     }

    //     order(cart,cb);
    // });

    it('should deal with promises', function () {
        let cart = {};

        return order(cart).then(total => {
            expect(total).to.eq(500);
        })


    });
    
});
