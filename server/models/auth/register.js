import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required:false,
        sparse: true
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId;
        }
    },
    passwordAttempt: {
        type: Number,
        default: 0
    },
    otpAttempt: {
        type: Number,
        default: 0
    },
    resetOtpAttempt: {
        type: Number,
        default: 0
    },
    mobileNumber: {
        type: String,
        unique: true,
        sparse: true,
        required:true
    },
    verifyOTP: {
        type: String,
        default: ''
    },
    verifyOTPExpireAt: {
        type: Number,
        default: 0
    },
    resetOTP: {
        type: String,
        default: ''
    },
    resetOTPExpireAt: {
        type: Number
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    cart: [{
        product: {
             type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    wishlist: [{
        product: {
             type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    }],
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    googleEmail: {
        type: String,
        unique: true,
        sparse: true
    },
    googleAvatar: {
        type: String
    }
}, {
    timestamps: true
});




const userModel =  mongoose.model('User',userSchema);

export default userModel;
