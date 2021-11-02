'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);


describe("validator middleware", () => {
   test("check the Person query name  that is NOT valid", async () => {
        const response = await request.get('/person');
        expect(response.status).toBe(500);
    });
    test(" check the Person query name is that is valid", async () => {
        const response = await request.get('/person?name=mohammad');
        expect(response.status).toBe(200);
    });
});