import mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2' //สำหรับแบ่งเพจ

//* Connection
mongoose
  .connect('mongodb://localhost/db1')
  .then(() => {
    console.log('MongoDB Connected!')
  })
  .catch((e) => console.log({ message: e.message }))

//* Product Model
let productSchema = new mongoose.Schema({
  itemid: String,
  name: String,
  price: Number,
  detail: String,
  cost: Number,
  stock: Number,
  over_stock: Number,
  date_added: Date,
})

productSchema.plugin(paginate) //สำหรับแบ่งเพจ

let Product = mongoose.model('Product', productSchema)

export { Product }

let orderSchema = new mongoose.Schema({
  UserName: String,
  comment: String,
  date_added: Date,
})

orderSchema.plugin(paginate) //สำหรับแบ่งเพจ

let Order = mongoose.model('Order', orderSchema)

export { Order }
