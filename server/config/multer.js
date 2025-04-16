import multer from "multer";
import path from "path";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // You can store in /uploads folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "product_images",  // Folder name on Cloudinary
      allowed_formats: ["jpg", "png", "jpeg", "webp"],
    },
  });
  

export const upload = multer({ storage });
