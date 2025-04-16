import CategoryModel from "../../models/categories/categories"



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
            categoriesList:{
                category:category
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"Category not found"
        }) 
    }
}

export const addCategory = [
    (req, res, next) => {
      req.folderType = "category"; // so image uploads to `category_images` folder in Cloudinary
      next();
    },
    async (req, res) => {
      const { categoryName } = req.body;
  
      try {
        const catImage = req.file ? req.file.path : null;
  
        if (!catImage) {
          return res.status(400).json({
            success: false,
            message: "Image not provided",
          });
        }
  
        const newCategory = new CategoryModel({
          categoryName,
          categoryImage: catImage,
        });
  
        await newCategory.save();
  
        res.status(201).json({
          success: true,
          message: "Category created successfully",
          data: newCategory,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
    },
  ];
  
