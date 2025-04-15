import { hash } from "bcrypt";
import userModel from "../../models/auth/register.js";
import jwt from 'jsonwebtoken';




// sign up
 export const SignUp = async (req,res) => {
    const {name,email,password,mobileNumber} = req.body;

    try{
        const existingUser  = await userModel.findOne({
            $or:[{email},{mobileNumber}]
        })

        if(existingUser){
            return res.status(500).json({message:"User already register"})
        }

        const hashPassword = await hash(password,10);

        const user = new userModel({
            name,
            email,
            mobileNumber,
            password:hashPassword,

        })

        await user.save()

    }
    catch{
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
