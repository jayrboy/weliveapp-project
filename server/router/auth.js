import express from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../models.js'
import jwt from 'jsonwebtoken'

import { auth } from '../middleware/auth.js'

const router = express.Router()

// http://localhost:8000/api/register
router.post('/register', async (req, res) => {
  try {
    let { username, password } = req.body
    let userData = await User.findOne({ username })
    if (userData) {
      return res.send('User Already Exists!').status(400)
    } else {
      // encrypt
      const salt = await bcrypt.genSalt(10)
      password = await bcrypt.hash(password, salt)
      userData = new User({
        username,
        password,
      })
      await userData.save()
      res.send('Register Successfully')
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    // check user
    const { username, password } = req.body
    let user = await User.findOneAndUpdate({ username }, { new: true })

    if (user) {
      const isMatch = bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).send('Password Invalid!!!')
      }
      // payload
      let payload = {
        user: {
          username: user.username,
          role: user.role,
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

router.post('/current-user', auth, async (req, res) => {
  try {
    console.log('currentUser', req.user)
    const user = await User.findOne({ username: req.user.username })
      .select('-password')
      .exec()
    res.send(user)
  } catch (error) {
    console.log({ message: error.message })
    res.status(500).send('Server Error')
  }
})

export default router
