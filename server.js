import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
import seekerRouter from './router/seekerRouter.js'

dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())
app.use(seekerRouter)

const port = process.env.PORT || 8000;

app.listen(port, (error) => { error ? console.log(error) : mongoose.connect('mongodb://127.0.0.1:27017/seeker').then(() => console.log(`Server is running on port ${port} and database connection has been establish`)).catch(err => console.log(`connection error: ${err}`)) })