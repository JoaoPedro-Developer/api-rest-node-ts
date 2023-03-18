import express from 'express'
import setupMiddlewars from './middlewars'
import setupRoutes from './routes'

const app = express()
setupMiddlewars(app)
setupRoutes(app)
export default app
