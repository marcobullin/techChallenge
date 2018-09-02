const request = require('supertest');
const app = require('../../app');

describe('Test All Car Advert API', () => {
    test('It should respond with status 200 for getting car adverts', (done) => {
        request(app).get('/carAdverts').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should respond with status 200 for getting a car advert with an id', (done) => {
        request(app).get('/carAdverts/5b8ba624f31c3bbf1fc667d4').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should respond with status 400 for getting a car advert with an invalid id', (done) => {
        request(app).get('/carAdverts/invalid_id').then(response => {
            expect(response.statusCode).toBe(400);
            done();
        });
    });

    test('It should respond with status 200 for creating a car advert', (done) => {
        request(app).post('/carAdverts').send({ title: 'Cool Car', fuel: 'diesel', price: 10000, isNew: true }).then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should respond with status 400 for creating a car advert with invalid data', (done) => {
        request(app).post('/carAdverts').send({ title: 'Cool Car', fuel: 'invalid', price: 10000 }).then(response => {
            expect(response.statusCode).toBe(400);
            done();
        });
    });

    test('It should respond with status 200 for updating a car advert', (done) => {
        request(app).put('/carAdverts/5b8ba624f31c3bbf1fc667d4').send({ title: 'Cool Car', fuel: 'diesel', price: 10000 }).then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should respond with status 400 for updating a car advert with invalid data', (done) => {
        request(app).put('/carAdverts/5b8ba624f31c3bbf1fc667d4').send({}).then(response => {
            expect(response.statusCode).toBe(400);
            done();
        });
    });

    test('It should respond with status 200 for deleting a car advert', (done) => {
        request(app).delete('/carAdverts/5b8ba624f31c3bbf1fc667d4').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('It should respond with status 400 for deleting a car advert with invalid id', (done) => {
        request(app).delete('/carAdverts/invalid_id').then(response => {
            expect(response.statusCode).toBe(400);
            done();
        });
    });
});