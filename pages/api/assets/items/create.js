import UserModel from '../../../../models/user'
import AssetModel from '../../../../models/assets'
import s3 from '../../../../lib/s3'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import formidable from 'formidable'
import fs from 'fs'
// AWS.config.region = 'us-east-1'

export const config = {
    api: {
        bodyParser: false
    }
}

async function handler(req, res) {
    // ! Only POST mothod is accepted
    if (req.method === 'POST') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            // const form = formidable({
            //     multiples: true,
            //     maxFileSize: 2 * 1024 * 1024,
            //     uploadDir: "./public/uploads",
            //     allowEmptyFiles: false,
            //     keepExtensions: true
            // })

            const form = new formidable.IncomingForm()

            const data = await new Promise((res, rej) => {
                try {

                    form.parse(req, async (err, fields, files) => {
                        const { name, symbol, price, category, type } = fields
        
                        // console.log(fields, "nice")
                        if(!files.logo) {
                            rej({ status: false, message: "Enter logo to be uploaded" })
                            // res.status(400).json({ status: false, message: "Enter logo to be uploaded" })
                            return
                        }

                        const key =  `${files.logo.newFilename}--${files.logo.originalFilename}`
        
                        const params = {
                            Bucket: process.env.S3_BUCKET,
                            Key: key,
                            ACL: 'public-read',
                            Body: fs.createReadStream(files.logo.filepath)
                        }
        
                        s3.upload(params, async (error) => {
                           
                            // if(error) return res.status(400).json({ status: false, message: "An Error occured"})
                            if(error) throw error
                            // console.log(data.Location, "here")
                            const asset = new AssetModel({ name, price, symbol, _categoryId: category, type, logo: key })
                            await asset.save()
                            res({ status: true, message: "Asset added successfully" })
                            // return res.status(200).json({ status: true, message: "Assets added successfully" })
                        })
                    })
                } catch(error) {
                    rej({ status: false, message: error.message})
                }

            })

            const { status } = data

            if(status === true) {
                return res.status(201).json({ ...data })
            } else {
                return res.status(401).json({ ...data })
            }
            // AWS.config.update({
            //     accessKeyId: process.env.S3_UPLOAD_KEY,
            //     secretAccessKey: process.env.S3_UPLOAD_SECRET,
            //     region: process.env.S3_REGION,
            //     signatureVersion: 'v4',
            // });
            
            //   const s3 = new AWS.S3();
            //   const post = await s3.createPresignedPost({
            //     Bucket: process.env.S3_BUCKET,
            //     Fields: {
            //       key: req.query.logo,
            //     },
            //     Expires: 60, // seconds
            //     Conditions: [
            //       ['content-length-range', 0, 1048576], // up to 1 MB
            //     ],
            //   });

            // res.status(200).json({ status: true, message: "Assets added successfully" })
        } catch(error) {
            console.log(error.message)
            res.status(500).json({ status: false, message: "Something went wrong"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;