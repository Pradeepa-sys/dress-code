import chalk from "chalk"
import { upload } from "../../config/multer.js"
import CategoryModel from "../../models/categories/categories.js"



export const allCategory = async(req,res) => {
    try {
        const category = await CategoryModel.find()
        if(!category){
            return res.status(400).json({
                message:"Category not found"
            })
        }
        res.json({
            status:true,
            categoriesList:category
        })
    } catch (error) {
        return res.status(500).json({
            message:"Category not found"
        }) 
    }
}

export const addCategory = 
[
  
    [upload.single("categoryImage")],
    async (req, res) => {
      try {
        const { categoryName } = req.body;
        const categoryImage = req.file ? req.file.path : null;

        if (!categoryImage) {
          return res.status(400).json({
            success: false,
            message: "Image not provided",
          });
        }
  
        const newCategory = new CategoryModel({
          categoryName,
          categoryImage,
        });
  
        await newCategory.save();
  
        res.status(201).json({
          success: true,
          message: "Category created successfully",
          data: newCategory,
        });
      } catch (error) {
        console.error("Error saving category:", error);
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
    }
  ];
  
  
