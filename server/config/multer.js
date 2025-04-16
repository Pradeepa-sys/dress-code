import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const folderType = req.folderType || "misc";
    // console.log("folderType",folderType)
    return {
      folder: folderType === "category" ? "category_image" : "product_image",
      // allowed_formats: ["jpg", "png", "jpeg", "webp", "svg"],
      public_id: `${Date.now()}-${file.originalname}`,
      resource_type: "auto",
    };
  },
});

export const upload = multer({ storage });


