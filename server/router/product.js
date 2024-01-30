import express from 'express'
import { Product } from '../models.js'

const router = express.Router()

//*  http://localhost:8000/api/db

router.post('/db/create', async (req, res) => {
  let form = req.body
  let data = {
    name: form.name || '',
    price: form.price || 0,
    detail: form.detail || '',
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

router.get('/db/read', (req, res) => {
  Product.find().exec((err, docs) => {
    res.json(docs)
  })
})

router.post('/db/update', async (req, res) => {
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

router.post('/db/delete', (request, response) => {
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

router.get('/db/paginate', (request, response) => {
  let options = {
    page: request.query.page || 1, //เพจปัจจุบัน
    limit: 2, //แสดงผลหน้าละ 2 รายการ (ข้อมูลมีน้อย)
  }

  Product.paginate({}, options, (err, result) => {
    response.json(result)
  })
})

router.get('/db/search', (request, response) => {
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

export default router
