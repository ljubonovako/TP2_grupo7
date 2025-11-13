// @jest-environment node
import request from 'supertest';
import app from '../src/app.js';

describe('Healthcheck', () => {
  it('GET /api/health -> 200 and ok:true', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('ok', true);
  });
});
