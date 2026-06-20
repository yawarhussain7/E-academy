import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './config/db.config.js'
import cors from 'cors'

import auth_router from './routes/auth/auth.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()
ConnectDB()

const app = express()
const PORT = process.env.PORT || 5000
//! Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// routes
app.get('/',(req,res)=>{
    res.status(200).send({
        message:'Hello Yawar',
        success:true
    })
})

app.use('/auth',auth_router)

app.listen(PORT,()=>{
    console.log(`Server is running on port: http:/localhost:${PORT}`)
})