const assert = require('chai').assert;
const getOrderDescription = require('../src/orden.js').getOrderDescription;

describe('GetOrderDescription', function(){
    it('app should return Sushi', function(){
        assert.equal(getOrderDescription(2), 'Sushi');
    })
});
