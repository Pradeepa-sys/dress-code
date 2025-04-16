import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    categoryName :{
        type:String,
        required:true,
        unique:true
    },
    categoryImage:{
        type:String,
        require:true
    },

})



const CategoryModel =  mongoose.model('category',categoriesSchema);

export default CategoryModel
