import { Express } from 'express'
import { bodyParser } from '../middlewars/body-parser'
import { cors } from '../middlewars/cors'
import { contentType } from '../middlewars/content-type'
export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
