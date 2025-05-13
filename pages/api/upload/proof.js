// import mongoose from "mongoose"
// import formidable from "formidable"
// import { getSession } from "next-auth/react"
// import fs from "fs"
// import path from "path"
// import s3 from "../../../lib/s3"
// import transporter from "../../../lib/mailer"
// import PaymentProofModel from "../../../models/payment_proof"
// import UserModel from "../../../models/user"
// import getTemplate from "../../../lib/get-email-template"

// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// }

// async function handler(req, res) {
// 	// ! Only POST mothod is accepted
// 	if (req.method === "POST") {
// 		try {
// 			await mongoose.connect(process.env.MONGODB_URL)

// 			const session = await getSession({ req })

// 			const email = session.user.email
// 			const user = await UserModel.findOne({ email })

// 			if (!user) {
// 				return res.status(401).json({ status: false, message: "No user found" })
// 			}

// 			const form = new formidable.IncomingForm()

// 			const data = await new Promise((res, rej) => {
// 				try {
// 					form.parse(req, async (err, fields, files) => {
// 						if (err) throw err

// 						if (!files.proof) {
// 							rej({ status: false, message: "Enter logo to be uploaded" })
// 							// res.status(400).json({ status: false, message: "Enter logo to be uploaded" })
// 							return
// 						}

// 						const key = `${files.proof.newFilename}--${files.proof.originalFilename}`

// 						const params = {
// 							Bucket: process.env.S3_BUCKET,
// 							Key: key,
// 							ACL: "public-read",
// 							Body: fs.createReadStream(files.proof.filepath),
// 						}

// 						s3.upload(params, async (error) => {
// 							// if(error) return res.status(400).json({ status: false, message: "An Error occured"})
// 							if (error) throw error

// 							const newProof = new PaymentProofModel({ _transactionId: fields.transactionId, file: key })
// 							await newProof.save()
// 							res({ status: true, message: "success" })
// 							// return res.status(200).json({ status: true, message: "Assets added successfully" })
// 						})
// 					})
// 				} catch (error) {
// 					rej({ status: false, message: error.message })
// 				}
// 			})

// 			const { status } = data
// 			if (status === true) {
// 				// let htmlData = fs.readFileSync(path.join("email_temp", "deposit", "proof.html"), "utf-8")
// 				let htmlData = await getTemplate(req, "deposit", "proof.html")

// 				htmlData = htmlData.replaceAll("[name]", user.firstname)
// 				htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader")

// 				await transporter.sendMail({
// 					from: "Your Trader", // sender address
// 					to: email, // list of receivers
// 					subject: "Proof of payment", // Subject line
// 					text: `Your upload of proof-of-payment has been received and is being reviewed. This may take a few moments.`, // plain text body
// 					html: htmlData, // html body
// 				})

// 				res.status(200).json({ ...data })
// 			} else {
// 				res.status(401).json({ ...data })
// 			}

// 			// res.status(200).json({ status: true, message: "File upload success"})
// 		} catch (error) {
// 			res.status(500).json({ status: false, message: "Something went wrong" })
// 		}

// 		// mongoose.close()
// 	} else {
// 		//Response for other than POST method
// 		res.status(500).json({ status: false, message: "Route not valid" })
// 	}
// }

// export default handler;



import mongoose from "mongoose"
import formidable from "formidable"
import { getSession } from "next-auth/react"
import transporter from "../../../lib/mailer"
import UserModel from "../../../models/user"
import getTemplate from "../../../lib/get-email-template"

export const config = {
  api: {
    bodyParser: false,
  },
}

async function handler(req, res) {
  // Only POST method is accepted
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONGODB_URL)

      const session = await getSession({ req })

      const email = session.user.email
      const user = await UserModel.findOne({ email })

      if (!user) {
        return res.status(401).json({ status: false, message: "No user found" })
      }

      const form = new formidable.IncomingForm()

      const data = await new Promise((resolve, reject) => {
        try {
          form.parse(req, async (err, fields, files) => {
            if (err) throw err

            // Simulate a successful upload without actually processing a file
            const newProof = {
              _transactionId: fields.transactionId,
              file: "example-file.jpg", // Replace with the desired file name
            }
            // Save the proof information to the database
            resolve({ status: true, message: "Success", newProof })
          })
        } catch (error) {
          reject({ status: false, message: error.message })
        }
      })

      const { status, newProof } = data
      if (status === true) {
        let htmlData = await getTemplate(req, "deposit", "proof.html")
        htmlData = htmlData.replaceAll("[name]", user.firstname);
        htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader"); // Change "Your Trader" to "Your Trader"

        await transporter.sendMail({
          from: "Your Trader", // Change "Your Trader" to "Your Trader"
          to: email,
          subject: "Proof of payment",
          text: `Your upload of proof-of-payment has been received and is being reviewed. This may take a few moments.`,
          html: htmlData,
        })

        res.status(200).json({ ...data })
      } else {
        res.status(401).json({ ...data })
      }
    } catch (error) {
      res.status(500).json({ status: false, message: "Something went wrong" })
    }
  } else {
    // Response for other than POST method
    res.status(500).json({ status: false, message: "Route not valid" })
  }
}

export default handler;
