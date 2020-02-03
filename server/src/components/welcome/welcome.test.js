const request = require('supertest');

const app = require('../../app');

describe('Welcome Component', () => {
  let res;

  describe('GET /', () => {
    beforeAll(async () => {
      res = await request(app.server).get('/api/welcome');
    });

    test('should return correct response', () => {
      expect(res.status).toEqual(200);
      expect(res.body).toEqual({ greeting: 'welcome' });
    });
  });
});
