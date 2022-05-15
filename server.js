import 'dotenv/config' 
import express from 'express'

const app = express()
const env = process.env


app.listen(env.PORT, () => console.log(`start on port ${env.PORT}`))