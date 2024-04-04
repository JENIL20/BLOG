import express from 'express'
import { User } from '../model/user.js'
import jwt from 'jsonwebtoken'
const jwtsecreat = "thisisjenilthisside#"



const router = express.Router()
router.post('/signup', async (req, res) => {
  const user = req.body
  const email = user.email
  if (await User.findOne({ email })) {
    res.send("already a user")
  }
  else {
    try {
      await User.create({
        name: user.name,
        email: user.email,
        password: user.password,
        description: user.description,
        image: user.image
      })
      res.status(200).send("user created successfully")
    } catch (error) {
      console.log(error)
      res.status(500).send("error in login")
    }
  }
})
router.post('/login', async (req, res) => {
  const email = req.body.email
  try {
    const user = await User.findOne({ email })
    if (user) {
      if (user.password === req.body.password) {
        const data = {
          user: {
            id: user._id
          }
        }
        // res.status(200).send("tu mara dil no tukdo che")
        // console.log("first")
        const alluser = await User.find()

        console.log(alluser)
        const authtoken = await jwt.sign(data, jwtsecreat)
        // console.log("token=", authtoken)
        // console.log("second")
        res.json({ loginuser: user, success: true, authtoken: authtoken })
      } else {
        res.status(404).send("tu bar jato re tu khoto password k che")
      }
    }
    else {
      res.send("user not found please signup")
    }
  } catch (error) {

  }
})

export default router