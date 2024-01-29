import express from 'express'
import { readdirSync } from 'fs'

const app = express()

// Middleware
app.use(express.urlencoded({ extended: true })) // body-parser
app.use(express.json()) // parser-json data sent in request.body

// Router
const files = readdirSync('./router')
files.map(async (file) => {
  let fs = await import(`./router/${file}`)
  app.use('/api', fs.default)
})

// Server
const host = 'localhost'
const port = 8000
app.listen(port, host, () =>
  console.log('Server running at http://%s:%s', host, port)
)
