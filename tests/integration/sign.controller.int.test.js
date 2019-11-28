const request = require('supertest');
const app = require('../../index');
const newSign = require('../../mock-data/sign.json');
const responseSign = require('../../mock-data/response_sign.json');

const endpoint = '/signo';

describe(endpoint, () => {
    it('GET ' + endpoint, async () => {
        const response = await request(app)
            .get(`${endpoint}/Hura/06-14-1994`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

        expect(response.body).toStrictEqual(responseSign)
    });
});
