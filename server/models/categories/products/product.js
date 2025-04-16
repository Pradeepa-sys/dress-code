import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    
    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true,
        ref: "category"
    },
    productPrice:{
        type:String,
        required:true
    },
    productOffer:{
        type:String,
        required:true
    },
    productDamage:{
        type:Boolean,
        required:true
    },
    cartCount: {
        type: Number,
        default: 0 // Keeps track of how many users added this product to their cart
    },
    wishlistCount: {
        type: Number,
        default: 0 // Keeps track of how many users added this product to their wishlist
    }


},{
    timestamps:true
});


const productModel = mongoose.models.product  || mongoose.model('product',productSchema);

export default productModel

