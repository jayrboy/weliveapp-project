import express from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../models.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

// http://localhost:8000/api/register
router.post('/register', async (req, res) => {
  try {
    // check user
    // console.log(req.body)
    const { name, password } = req.body
    const user = await User.findOne({ name })
    if (user) {
      return res.send('User Already Exists!').status(400)
    }
    // encrypt
    const salt = await bcrypt.genSalt(10)
    user = new User({
      name,
      password,
    })
    user.password = await bcrypt.hash(password, salt)
    // save
    await user.save()
    res.send('Register Successfully')
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    // check user
    const { name, password } = req.body
    let user = await User.findOneAndUpdate({ name }, { new: true })

    if (user) {
      const isMatch = bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).send('Password Invalid!!!')
      }
      // payload
      let payload = {
        user: {
          name: user.name,
        },
      }
      // generate toke
      jwt.sign(payload, 'jwtsecret', { expiresIn: '1d' }, (error, token) => {
        if (error) throw error
        res.json({ token, payload })
      })
    } else {
      return res.status(400).send('User Not Found!!!')
    }
  } catch (error) {
    console.log({ message: error.message })
    res.status(500)
  }
})

export default router
