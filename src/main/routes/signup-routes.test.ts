import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return account on success', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/api/signup')
      .send({
        name: 'João',
        email: 'jpbcirino25@gmail.com',
        password: '1234',
        passwordConfirmation: '1234'
      })
      .expect(200)
  })
})
