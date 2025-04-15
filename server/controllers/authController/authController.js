import { hash } from "bcrypt";
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

        const hashedPassword = await hash(password, 10);

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

