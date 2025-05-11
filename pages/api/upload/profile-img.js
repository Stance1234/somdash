import mongoose from "mongoose";
import formidable from "formidable";
import { getSession } from "next-auth/react";
import UserModel from "../../../models/user";
import cloudinary from "cloudinary"; // Import Cloudinary library
import streamifier from "streamifier"; // To convert the file buffer to stream

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      await mongoose.connect(process.env.MONGODB_URL);

      const session = await getSession({ req });
      const email = session.user.email;
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(401).json({ status: false, message: "No user found" });
      }

      // Initialize Cloudinary configuration
      cloudinary.config({
        cloud_name: 'dqny2b4gb', 
  api_key: '635962513272761', 
  api_secret: 'LAQ3OxANoO7M6iEAGKEWZiuJsmA' 
      });

      if (user.img) {
        // Delete the existing image on Cloudinary
        try {
          const deleteResult = await cloudinary.v2.uploader.destroy(user.img);
        } catch (error) {
          return res.status(500).json({ status: false, message: "Error deleting old profile photo from Cloudinary" });
        }
      }

      const form = new formidable.IncomingForm();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          return res.status(500).json({ status: false, message: err.message });
        }

        if (!files.img) {
          return res.status(400).json({ status: false, message: "Please upload an image" });
        }

        // Upload the new profile image to Cloudinary
        try {
          const stream = streamifier.createReadStream(files.img.file);
          const uploadResult = await cloudinary.v2.uploader.upload_stream(
            { resource_type: "image" },
            (result) => {
              // Callback function to handle the upload result
              user.img = result.public_id;
            }
          );
          stream.pipe(uploadResult);
        } catch (error) {
          return res.status(500).json({ status: false, message: "Error uploading profile photo to Cloudinary" });
        }

        await user.save();
        res.status(200).json({ status: true, message: "Profile photo uploaded successfully" });
      });
    } catch (error) {
      res.status(500).json({ status: false, message: "Something went wrong" });
    }
  } else {
    res.status(500).json({ status: false, message: "Route not valid" });
  }
}

export default handler;
