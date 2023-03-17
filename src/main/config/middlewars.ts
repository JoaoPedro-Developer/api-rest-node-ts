import { Express } from 'express'
import { bodyParser } from '../middlewars/body-parser'
import { cors } from '../middlewars/cors'
export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
}
