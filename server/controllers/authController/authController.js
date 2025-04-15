import bcrypt from 'bcryptjs';
import userModel from "../../models/auth/register.js";
import jwt from 'jsonwebtoken';




export const SignUp = async (req, res) => {
    const { userName, email, mobileNumber, password } = req.body;

    if (!userName || !password || (!email && !mobileNumber)) {
        return res.status(400).json({
            success: false,
            message: "Name, password, and either email or mobile number are required."
        });
    }

    try {
        // Build query only with defined fields
        const query = [];
        if (email) query.push({ email });
        if (mobileNumber) query.push({ mobileNumber });

        const existingUser = await userModel.findOne({
            $or: query
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already registered with same email or mobile number"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({
            userName,
            email: email || '', // fallback if not given
            mobileNumber: mobileNumber || '',
            password: hashedPassword
        });

        await user.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                mobileNumber: user.mobileNumber
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



export const login = async (req,res) =>{
    // const errors = validationResult(req);

    // if(!errors.isEmpty()){
    //     return res.status(400).json({
    //         success:false,
    //         errors:errors.array()
    //     })
    // }

    const {email,password,mobileNumber} = req.body;
    
    if (!password || (!email && !mobileNumber)) {
        return res.status(400).json({
            success: false,
            message: "Password and either email or mobile number are required."
        });
    }
    try {
        let user = null ; 
        if(email){
            user = await userModel.findOne({email})
          
        }else if(mobileNumber){
            user = await userModel.findOne({mobileNumber});
         
        }else{
            res.status(400).json({
                success:false,
                message:"Invalid User"
            })
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });
      
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                status: false,
                message: "Password Invalid"
            })
        }

        return res.json({
            success: true,
            user: user,
            token: token
        })

        
  

    } catch (error) {
     return res.status(400).json({
        status:false,
        message:"Invalid Login"
     })   
    }
}