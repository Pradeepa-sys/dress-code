import { upload } from "../../config/multer.js";
import productModel from "../../models/categories/products/product.js";



export const allProducts = async(req,res) => {

    try {
        const product = await productModel.find();
        if(!product){
            return res.status(400).json({
                message:"Product not found"
            })
        }
        res.json({
            status:true,
            productList:{
                products:product
            }
        })

    } catch (error) {
        res.status(500).json({
            status:false,
            message:"Internal Server Error"
        })
    }
}

export const addProduct =[
upload.single("productImage"),
async(req,res) =>{
   
    const {
        userId,
        productName,
        productCategory,
        productPrice,
        productOffer,
        productDamage
    } = req.body;

    try {
        // const user = await userModel.findById({_id:userId}) ;
        // if(!user){
        //     return res.json({
        //         success:false,
        //         message:"User not found"
        //     })
        // }
        console.log("productImage",req.file)
        const productImage = req.file ? req.file.path : null; 
        if (!productImage) {
          return res.json({
            success: false,
            message: "Image not provided",
          });
        }

        const newProduct = new productModel({
            userId,
            productName,
            productImage,
            productCategory,
            productPrice,
            productOffer,
            productDamage
        })

        // console.log("newProduct",newProduct)

        await newProduct.save();

        // user.products.push(newProduct._id);
        // await user.save();

        res.json({
            status:true,
            productDetails:{
                products:newProduct
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            status:false,
            message:"Internal Server Error"
        })
    }

}
]