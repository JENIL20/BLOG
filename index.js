import express from 'express'
import { } from 'dotenv/config'
import router from './router/router1.js'
import cors from 'cors'
import dbcon from './db.js'

const app = express()
app.use(express.json())
app.use(cors())

dbcon()
app.use('/', router)

app.listen(process.env.PORT, (req, res) => {
  console.log(`hu connect thai gayo ${process.env.PORT}`);
})