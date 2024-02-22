const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2') //สำหรับแบ่งเพจ

let productSchema = new mongoose.Schema(
  {
    barcode: String,
    name: String,
    stock: Number,
    overstock: Number,
    price: Number,
    cost: Number,
    date_added: Date,
  },
  { timestamps: true }
)

productSchema.plugin(paginate) //สำหรับแบ่งเพจ

let Product = mongoose.model('Product', productSchema)

module.exports = Product
