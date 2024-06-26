import request from 'supertest'
import app from '../config/app'

describe('Cors Middleware', () => {
  test('Should enable Cors', async () => {
    app.get('/teste_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/teste_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
