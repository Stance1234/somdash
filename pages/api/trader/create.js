import TraderModel from "../../../models/trader"
import UserModel from "../../../models/user"
import s3 from "../../../lib/s3"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import formidable from "formidable"
import fs from "fs"

export const config = {
	api: {
		bodyParser: false,
	},
}

async function handler(req, res) {
	// ! Only POST mothod is accepted
	if (req.method === "POST") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			const form = new formidable.IncomingForm()

			const data = await new Promise((res, rej) => {
				try {
					form.parse(req, async (err, fields, files) => {
						const { name, type, win_rate, profit_share, price } = fields

						// console.log(fields, "nice")
						if (err) throw err

						if (!files.profile_img) {
							rej({ status: false, message: "Enter profile picture to be uploaded" })
							// res.status(400).json({ status: false, message: "Enter logo to be uploaded" })
							return
						}

						const key = `${files.profile_img.newFilename}--${files.profile_img.originalFilename}`

						const params = {
							Bucket: process.env.S3_BUCKET,
							Key: key,
							ACL: "public-read",
							Body: fs.createReadStream(files.profile_img.filepath),
						}

						s3.upload(params, async (error) => {
							// if(error) return res.status(400).json({ status: false, message: "An Error occured"})
							if (error) throw error

							const newTrader = await new TraderModel({ name, type, win_rate, profit_share, profile_img: key, price })
							await newTrader.save()
							res({ status: true, message: "Trader added successfully" })
							// return res.status(200).json({ status: true, message: "Assets added successfully" })
						})
					})
				} catch (error) {
					rej({ status: false, message: error.message })
				}
			})

			const { status } = data

			if (status === true) {
				return res.status(201).json({ ...data })
			} else {
				return res.status(401).json({ ...data })
			}

			// res.status(200).json({ status: true, message: "Trader added successfully" })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went" })
		}

		// mongoose.close()
	} else if (req.method === "PUT") {
		// const { win_rate, profit_share, price, id } = req.body

		try {
			const form = new formidable.IncomingForm()

			const data = await new Promise((res, rej) => {
				try {
					form.parse(req, async (err, fields, files) => {
						const { win_rate, profit_share, price, id } = fields

						// console.log(fields, "nice")
						if (err) throw err

						const updatedValues = {}
						if (win_rate) updatedValues.win_rate = win_rate
						if (profit_share) updatedValues.profit_share = profit_share
						if (price) updatedValues.price = price
						await TraderModel.findOneAndUpdate({ _id: id }, { ...updatedValues })

						res({ status: true, message: "Trader updated successfully" })
					})
				} catch (error) {
					rej({ status: false, message: error.message })
				}
			})

			const { status } = data

			if (status === true) {
				res.status(201).json({ status: true, message: "Update successful" })
			} else {
				return res.status(400).json({ ...data })
			}
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went" })
		}
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
