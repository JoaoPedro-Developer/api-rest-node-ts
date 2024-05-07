import request from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Should return default Content Type as json', async () => {
    app.get('/teste_content_type', (req, res) => {
      res.send('')
    })
    await request(app)
      .get('/teste_content_type')
      .expect('content-type', /json/)
  })

  test('Should return xml Content Type when forced', async () => {
    app.get('/teste_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app)
      .get('/teste_content_type_xml')
      .expect('content-type', /xml/)
  })
})
