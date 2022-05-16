import 'dotenv/config' 
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { authRouter } from './routes/auth.routes'

const env = process.env
const server = express()

server.use(bodyParser.json())
server.use("/api/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(env.DB_HOST)
        server.listen(env.PORT, () => console.log(`start on port ${env.PORT}`))
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
} 

start()