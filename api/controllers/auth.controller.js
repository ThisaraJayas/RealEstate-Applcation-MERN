import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async(req,res) =>{
    const {username, email, password} = req.body  //grab input from signup page /api/auth/signup

    const hashPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({username,email,password: hashPassword}) //asign to user model
    try{
        await newUser.save() //grabing request and save it in database
        res.status(200).json('User created success')
        
    }catch(err){
        res.status(500).json('err.message')
    }
    
}