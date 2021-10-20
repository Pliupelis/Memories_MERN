import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import postRoutes  from './routes/posts.js'

const app = express()
  //bodyparser
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>
        app.listen(PORT, ()=>
         console.log(`running on ${PORT}`)))
    .catch((err)=>
console.log(err.message))
