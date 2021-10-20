import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
//bodyparser
app.use(express.json());
app.use(express.urlencoded({
  extended: true }))
  app.use(cors())

const CONNECTION_URL = 'mongodb+srv://admin:slaptazodis@cluster0.uvq9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
