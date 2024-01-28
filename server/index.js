const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/model-product')

const host = 'localhost'
const port = 8000
const app = express()

// body-parser
app.use(express.urlencoded({ extended: true }))
// parser-json data sent in request.body
app.use(express.json())

app.post('/api/db/create', async (req, res) => {
  let form = req.body
  let data = {
    name: form.name || '',
    price: form.price || 0,
    detail: form.detail || '',
    date_added: new Date(Date.parse(form.date_added)) || new Date(),
  }

  await Product.create(data, (err) => {
    if (!err) {
      console.log('document saved')
      res.send(true)
    } else {
      console.log(err.message)
      res.send(false)
    }
  })
})

app.get('/api/db/read', (req, res) => {
  Product.find().exec((err, docs) => {
    res.json(docs)
  })
})

app.post('/api/db/update', async (req, res) => {
  let form = req.body
  let data = {
    name: form.name || '',
    price: form.price || 0,
    detail: form.detail || '',
    date_added: new Date(Date.parse(form.date_added)) || new Date(),
  }

  await Product.findByIdAndUpdate(form._id, data, {
    useFindAndModify: false,
  }).exec((err) => {
    if (err) {
      res.json({ error: err })
      return
    }
  })

  //หลังการอัปเดต ก็อ่านข้อมูลอีกครั้ง แล้วส่งไปแสดงผลที่ฝั่งโลคอลแทนข้อมูลเดิม
  Product.find().exec((err, docs) => {
    res.json(docs)
  })
})

app.post('/api/db/delete', (request, response) => {
  let _id = request.body._id

  Product.findByIdAndDelete(_id, { useFindAndModify: false }).exec((err) => {
    if (err) {
      response.json({ error: err })
      return
    }
  })

  Product.find().exec((err, docs) => {
    response.json(docs)
  })
})

app.get('/api/db/paginate', (request, response) => {
  let options = {
    page: request.query.page || 1, //เพจปัจจุบัน
    limit: 2, //แสดงผลหน้าละ 2 รายการ (ข้อมูลมีน้อย)
  }

  Product.paginate({}, options, (err, result) => {
    response.json(result)
  })
})

app.get('/api/db/search', (request, response) => {
  let q = request.query.q || ''

  //กรณีนี้ให้กำหนด pattern ด้วย RegExp แทนการใช้ / /
  let pattern = new RegExp(q, 'ig')

  //จะค้นหาจากฟิลด์ name และ detail
  let conditions = {
    $or: [{ name: { $regex: pattern } }, { detail: { $regex: pattern } }],
  }

  let options = {
    page: request.query.page || 1, //เพจปัจจุบัน
    limit: 2, //แสดงผลหน้าละ 2 รายการ (ข้อมูลมีน้อย)
  }

  Product.paginate(conditions, options, (err, result) => {
    response.json(result)
  })
})

mongoose
  .connect('mongodb://localhost/db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected!')
    app.listen(port, host, () =>
      console.log('Server running at http://%s:%s', host, port)
    )
  })
  .catch((e) => console.log({ message: e.message }))
