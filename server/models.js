import mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2' //สำหรับแบ่งเพจ

//* Connection
mongoose
  .connect('mongodb://localhost/db1')
  .then(() => {
    console.log('MongoDB Connected!')
  })
  .catch((e) => console.log({ message: 'Failed connection: ' + e }))

//* Product Model
let productSchema = new mongoose.Schema({
  itemid: String,
  name: String,
  price: Number,
  cost: Number,
  stock: Number,
  over_stock: Number,
  date_added: Date,
})
productSchema.plugin(paginate) //สำหรับแบ่งเพจ
let Product = mongoose.model('Product', productSchema)

//* User Model
const userSchema = mongoose.Schema(
  {
    username: String,
    password: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    name: String,
    email: String,
    picture: Array,
  },
  { timestamps: true }
)
const User = mongoose.model('User', userSchema)

//* Comment Model
const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // รหัสไอดีผู้ใช้ที่แสดงความคิดเห็น
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // รหัสสินค้าที่ความคิดเห็นเกี่ยวข้อง
  content: { type: String }, // เนื้อหาความคิดเห็น
  createdAt: { type: Date, default: Date.now }, // วันที่และเวลาที่ความคิดเห็นถูกสร้าง
})
const Comment = mongoose.model('Comment', commentSchema)

export { Product, Comment, User }
