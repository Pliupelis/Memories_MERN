import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes  from './routes/posts.js'

const app = express()
  app.use(cors())

  //bodyparser
app.use(express.json());
app.use(express.urlencoded({
  extended: true }))
app.use('/posts', postRoutes)

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>
        app.listen(PORT, ()=>
         console.log(`running on ${PORT}`)))
    .catch((err)=>
console.log(err.message))

