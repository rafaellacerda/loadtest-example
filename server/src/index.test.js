const request = require('supertest');
import { app } from './index.js';

describe('Server API', () => {
  it('should authenticate successfully', async () => {
    const response = await request(app)
      .post('/api/auth')
      .send({ username: 'admin', password: 'admin' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should fail authentication with invalid credentials', async () => {
    const response = await request(app)
      .post('/api/auth')
      .send({ username: 'user', password: 'wrongpassword' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid credentials');
  });

  it('should fetch data successfully', async () => {
    const authResponse = await request(app)
      .post('/api/auth')
      .send({ username: 'admin', password: 'admin' });

    const { token } = authResponse.body;

    const dataResponse = await request(app)
      .get('/api/data')
      .set('Authorization', `Bearer ${token}`);

    expect(dataResponse.status).toBe(200);
    expect(dataResponse.body.message).toBe('Hello from server!');
  });
});

