describe('sample', function() {
    it('returns 42', function() {
        assert.equal(theAnswer(), 42);
    });
});


// var express = require('express');
// var app = express();
//
// app.use(express.static('../src/'));
//
// app.listen(3000);
// console.log('Server listening on 3000');

describe('sample.html', function() {
    it('displays 42', function() {
        browser().navigateTo('../src/sample.html');
        // This assertion will fail
        expect(element('#content').text()).toBe('43');
    });
});