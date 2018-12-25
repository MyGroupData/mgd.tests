var assert = require('assert');
var clients = require('restify-clients');
var client = clients.createJsonClient({
    url: 'http://localhost:8080',
    version: '~1.0'
});
client.get('/echo/mark', function (err, req, res, obj) {
    assert.ifError(err);
    console.log('Server returned: %j', obj);
});
describe('Array', function () {
    describe('#indexOf3()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(5), -1);
        });
    });
});
//# sourceMappingURL=backendTest.js.map