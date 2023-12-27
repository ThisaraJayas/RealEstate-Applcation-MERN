import { errorHandler } from "../utils/error"
import bcryptjs from 'bcryptjs'

export const test = (req,res)=>{
    res.json({
        message: "Hello there !"
    })
}

export const updateUser = (req,res,next) =>{
    if(req.user.id !== req.params.id) 
    return next(errorHandler(401,'You can only update your own account'))
    try{
        if(req.body.password){
            req.body.password = bcryptjs
        }
    }catch(error){
        next(error)
    }
}