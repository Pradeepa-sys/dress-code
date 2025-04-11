const mongoose = require("mongoose");



const userShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true
    },
    passport:{
        type:String,
        required: function (){
            
        }
    }
})