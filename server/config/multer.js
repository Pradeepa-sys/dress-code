import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";
import path  from "path";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const folderType = req.folderType || "misc";
    console.log("file",file)
    return {
      folder: folderType === "category" ? "category_image" : "product_image",
      allowed_formats: ["jpg", "png", "jpeg", "webp"],
      public_id: `${Date.now()}-${path.parse(file.originalname).name}`,
      resource_type: "auto",
    };
  },
});

export const upload = multer({ storage });


