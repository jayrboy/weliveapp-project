import express from 'express'
import { Order } from '../models.js'

const router = express.Router()

//*  http://localhost:8000/api/db

router.post('/db/order', (req, res) => {
  let form = req.body
  let data = {
    name: form.name || '',
    comment: form.detail || '',
    date_added: new Date(Date.parse(form.date_added)) || new Date(),
  }

  Order.create(data)
    .then((docs) => {
      console.log('Order Send')
      res.send(true)
    })
    .catch((err) => {
      console.log(err.message).send(false)
    })
})

router.get('/db/readOrder', (req, res) => {
  Order.find()
    .exec()
    .then((docs) => res.json(docs))
})

router.post('/db/cart', (req, res) => {
  let form = req.body
  let data = {
    name: form.name || '',
    comment: form.detail || '',
    date_added: new Date(Date.parse(form.date_added)) || new Date(),
  }
  Order.findByIdAndUpdate(form._id, data, { useFindAndModify: false })
    .exec()
    .then(() => {
      //หลังการอัปเดต ก็อ่านข้อมูลอีกครั้ง แล้วส่งไปแสดงผลที่ฝั่งโลคอลแทนข้อมูลเดิม
      Order.find()
        .exec()
        .then((docs) => res.json(docs))
    })
    .catch((err) => res.json({ message: err.message }))
})

router.post('/db/delete', (req, res) => {
  let _id = req.body._id

  Order.findByIdAndDelete(_id, { useFindAndModify: false })
    .exec()
    .then(() => {
      Order.find()
        .exec()
        .then((docs) => res.json(docs))
    })
    .catch((err) => res.json({ message: err.message }))
})

router.get('/db/search', (req, res) => {
  let q = req.query.q || ''

  //กรณีนี้ให้กำหนด pattern ด้วย RegExp แทนการใช้ / /
  let pattern = new RegExp(q, 'ig')

  //จะค้นหาจากฟิลด์ name และ detail
  let conditions = {
    $or: [{ name: { $regex: pattern } }, { detail: { $regex: pattern } }],
  }

  let options = {
    page: req.query.page || 1, //เพจปัจจุบัน
    limit: 3, //แสดงผลหน้าละ 2 รายการ (ข้อมูลมีน้อย)
  }

  Order.paginate(conditions, options, (err, result) => {
    res.json(result)
  })
})

export default router
