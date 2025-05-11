import mongoose from 'mongoose';
import formidable from 'formidable';
import IdentityModel from '../../../models/identity';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

// Initialize Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
    cloud_name: 'dqny2b4gb', 
    api_key: '635962513272761', 
    api_secret: 'LAQ3OxANoO7M6iEAGKEWZiuJsmA'
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await mongoose.connect(process.env.MONGODB_URL);

      const form = new formidable.IncomingForm();

      const data = await new Promise((resolve, reject) => {
        try {
          form.parse(req, async (err, fields, files) => {
            if (err) throw err;

            const uploadPromises = [];

            for (const file in files) {
              const item = files[file];

              if (!item) {
                reject({ status: false, message: 'Enter a file to be uploaded' });
                break;
              }

              // Convert the file buffer to a readable stream
              const fileStream = streamifier.createReadStream(item.file);

              const options = {
                public_id: `${item.newFilename}--${item.originalFilename.replace(/\s/g, '_')}`,
                resource_type: 'auto', // Automatically detect resource type (image, video, etc.)
              };

              // Upload the file to Cloudinary
              const uploadPromise = new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(options, (error, result) => {
                  if (error) {
                    reject({ status: false, message: error.message });
                  } else {
                    resolve(result.public_id);
                  }
                }).end(fileStream);
              });

              uploadPromises.push(uploadPromise);
            }

            // Wait for all uploads to complete
            Promise.all(uploadPromises)
              .then((publicIds) => {
                const userIdentity = new IdentityModel({ email: fields.email, front: publicIds[0], back: publicIds[1] });
                return userIdentity.save();
              })
              .then(() => {
                resolve({ status: true, message: 'File upload success' });
              })
              .catch((error) => {
                reject({ status: false, message: error.message });
              });
          });
        } catch (error) {
          reject({ status: false, message: error.message });
        }
      });

      const { status } = data;

      if (status === true) {
        res.status(200).json({ ...data });
      } else {
        res.status(400).json({ ...data });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: 'Something went wrong' });
    }
  } else {
    res.status(500).json({ status: false, message: 'Route not valid' });
  }
}

export default handler;
