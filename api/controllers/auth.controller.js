import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import  jwt  from "jsonwebtoken"

export const signup = async(req,res, next) =>{
    const {username, email, password} = req.body  //grab input from signup page /api/auth/signup

    const hashPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({username,email,password: hashPassword}) //asign to user model
    try{
        await newUser.save() //grabing request and save it in database
        res.status(200).json('User created success')
        
    }catch(err){
       next(err) //logic created in index.js
    //    next(errorHandler(330,'utils error')) another method error.js in utils
    }
    
}


//signin
export const signin = async(req,res,next)=>{
    const {email, password} =req.body
    try{
        const validUser = await User.findOne({email})
        if(!validUser) return next(errorHandler(404,'User not found'))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
    if(!validPassword) return next(errorHandler(401, 'Wrong Credentials!'))

    const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET)
    //////return all except password (destructure)
    const {password:pass, ...rest} =validUser._doc  //password wont leaked to user
    res.cookie('access_token',token,{httpOnly: true}).status(200).json(rest)
    }catch{
        next(error)
    }
}