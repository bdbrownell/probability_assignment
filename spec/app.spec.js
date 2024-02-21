const request = require('supertest');
const app = require('../app');

describe('app.js tests', () => {
  it('should return a 200 status code for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
    
});