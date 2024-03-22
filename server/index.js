import 'dotenv/config'
import express from 'express'
import { readdirSync } from 'fs'
import morgan from 'morgan'
import cors from 'cors'
import xhub from 'express-x-hub'
import webhooks from './webhooks.js'

const app = express()
const port = process.env.PORT

/* --- Middleware --- */
app.use(morgan('dev'))
app.use(cors())
app.use(xhub({ algorithm: 'sha256', secret: process.env.APP_SECRET }))
app.use(express.urlencoded({ extended: true })) // body-parser
app.use(express.json()) // parser-json data sent in request.body

/* --- Router --- */
app.use('/webhooks', webhooks)

const files = readdirSync('./router')
files.map(async (file) => {
  let fs = await import(`./router/${file}`)
  app.use('/api', fs.default)
})

/* --- Server --- */
app.disable('X-Powered-By')
app.listen(port, () =>
  console.log('Server running at http://localhost:%s', port)
)
