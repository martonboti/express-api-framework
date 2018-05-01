const expect = require('expect');
const request = require('supertest');

const { app } = require('./../app');

describe('GET /', () => {
  it('should return ping', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body.data.status).toBe('Service up');
        expect(res.body.data.apiVersion).toBe('v1.0');
      })
      .end(done);
  });
});
