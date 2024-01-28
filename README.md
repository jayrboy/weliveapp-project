#### APP9-MERN-STACK

1. backend
2. frontend

- .gitignore
- README.md

```sh
  mkdir app9-MERN-stack
  cd app9-MERN-stack
```

#### Concurrently Frontend & Backend (กรณีรันพร้อมกัน)

- app9-mern-stack/package.json

```sh
  npm init -y
  npm install concurrently
```

```json
"scripts": {
    "frontend": "cd frontend && npm run dev",
    "backend": "cd backend && npm run dev",
    "dev": "concurrently -n frontend,backend -c cyan,green \"npm run frontend\" \"npm run backend\""
    },
```

#### Server (Backend)

```sh
  mkdir server
  cd server
  npm init -y
```

- update "type" ./server/package.json

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
},
```

```sh
  npm install express nodemon mongoose
```

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    },
```

- config.js

```js
export const port = 8000
```

- create index.js ./server/index.js

```js
import express from 'express'
import { port } from './server/config.js'

const app = express()
```

- connect mongoDB for test

```js
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/db1')
  .then(() => console.log('Connected! OK'))
  .catch((err) => console.log('Connection Error: ', err))
```

# Schema and Model in Basic

- ./server/model.js

```js
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db1').catch((err) => console.error(err))

let productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  detail: String,
  date_added: Date,
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product
```

- ./server/index.js

```js
const Product = require('./model')
```

#### Local (Frontend)

```sh
  cd ..
  npm create vite@latest local -- --template react
  cd local
  npm install react-router-dom
```

- src/main.jsx

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/db',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/db/create',
    element: <DBCreact />,
  },
])

<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
```

- src/components/DBNav.jsx

```js
import { NavLink } from 'react-router-dom'

const DBNav = () => {
  return (
    <nav style={{ margin: '30px 50px' }}>
      <NavLink to="/db/create">เพิ่มข้อมูล</NavLink> <br />
    </nav>
  )
}
export default DBNav
```

- src/App.jsx

```js
import DBNav from './components/DBNav'

function App() {
  return (
    <>
      <DBNav />
    </>
  )
}

export default App
```

#### Add Data

Local

- สร้างแบบฟอร์ม ที่รับ input แต่ละ field (column) ที่มีอยู่ใน collection (table)
- ใช้ collection (table) ใน model.js ทำการส่งข้อมูลด้วย POST
- หลักการส่งข้อมูลด้วย POST อ่านข้อมูลจาก FormData แล้วแปลงเป็น JSON ส่งขึ้น Server

Server

- อ่านข้อมูลจาก FormData แล้วนำไปสร้าง object จากนั้นก็เพิ่มลงในฐานข้อมูลผ่านเมธอด
- create() ของ model.js

#### CORS Error

- local/package.json

```json
{
  "type": "module",
  "proxy": "http://localhost:8000/"
}
```

- local/.proxyrc

```json
{
  "/api": {
    "target": "http://localhost:8000/"
  }
}
```

- local/vite.config.js

```js
plugins: [react()],
server:{
  proxy: {
    '/api': 'http://localhost:8000'
  }
},
```
