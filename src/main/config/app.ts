import express from 'express'
import setupMiddlewars from './middlewars'

const app = express()
setupMiddlewars(app)
export default app
