import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_KEY,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadCloudinary = async (localFile) => {
  if (!localFile) return null;
  try {
    const response = await cloudinary.uploader.upload(localFile, {
      resource_type: "auto",
    });

    console.log("successfully uploaded to Cloud", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFile);
    return null;
  }
};

export { cloudinary, uploadCloudinary };
