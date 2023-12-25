import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.route.js'


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected..');
}).catch((err)=>{
    console.log(err);
})


const app = express()

app.listen(3000, () =>{
    console.log('server running in port 3000');
})
app.use(express.json()) //should define to run on postman

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter)