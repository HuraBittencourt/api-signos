const SignController = require('./index');
const SignModel = require('../../models/sign');
const newSign = require('../../mock-data/sign.json');
const responseSign = require('../../mock-data/response_sign.json');
const httpRequest = require('node-mocks-http');

beforeEach(() => {
    req = httpRequest.createRequest();
    res = httpRequest.createResponse();
})

describe('Get Sign Controller', () => {
    it('should has a function', () => {
        expect(typeof SignController.newRegisterController).toBe('function');
    });
    
    it('should return response with status 200 and the sign', () => {
        req.params = newSign;
        SignController.newRegisterController(req, res);
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getJSONData()).toStrictEqual(responseSign);
    });    
});
