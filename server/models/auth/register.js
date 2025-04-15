import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
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
        sparse: true
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
    products: [{
         type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
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

// Custom validator: Require either email or mobileNumber
userSchema.pre('validate', function (next) {
    if (!this.email && !this.mobileNumber) {
        this.invalidate('email', 'Either email or mobile number is required.');
        this.invalidate('mobileNumber', 'Either mobile number or email is required.');
    }
    next();
});



const userModel =  mongoose.model('User',userSchema);

export default userModel;
