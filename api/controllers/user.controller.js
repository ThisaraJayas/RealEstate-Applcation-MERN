import User from "../models/user.model"
import { errorHandler } from "../utils/error"
import bcryptjs from 'bcryptjs'

export const test = (req,res)=>{
    res.json({
        message: "Hello there !"
    })
}

export const updateUser = async(req,res,next) =>{
    if(req.user.id !== req.params.id) 
    return next(errorHandler(401,'You can only update your own account'))
    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password,10)
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,

            }
        },{new:true})
    }catch(error){
        next(error)
    }
}