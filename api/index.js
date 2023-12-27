import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'
import {cookieParser} from 'cookie-parser'


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected..');
}).catch((err)=>{
    console.log(err);
})


const app = express()
app.use(cookieParser())

app.listen(3000, () =>{
    console.log('server running in port 3000');
})
app.use(express.json()) //should define to run on postman

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter)



//middlewere
app.use((err,req, res, next)=>{
    const statusCode =err.statusCode || 500
    const message = err.message || 'Internal server error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        
    })
})