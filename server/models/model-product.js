const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2') //สำหรับแบ่งเพจ

let productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    detail: String,
    date_added: Date,
  },
  { timestamps: true }
)

productSchema.plugin(paginate) //สำหรับแบ่งเพจ

let Product = mongoose.model('Product', productSchema)

module.exports = Product
