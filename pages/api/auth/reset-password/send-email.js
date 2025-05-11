import PasswordResetModel from "../../../../models/password-reset"
import mongoose from "mongoose"
import fs from "fs"
import path from "path"
import { generate } from "referral-codes"
import UserModel from "../../../../models/user"
import transporter from "../../../../lib/mailer"
import getTemplate from "../../../../lib/get-email-template"

async function handler(req, res) {
	//Only POST mothod is accepted
	if (req.method === "POST") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const { email } = req.body

			const user = await UserModel.findOne({ email })

			if (user) {
				await PasswordResetModel.deleteOne({ email })

				const pin = generate({
					length: 18,
				})

				const passwordReset = await new PasswordResetModel({ email, pin: pin[0] })

				await passwordReset.save()

				// let htmlData = fs.readFileSync(path.join("email_temp", "password", "reset.html"), "utf-8")
				let htmlData = await getTemplate(req, "password", "reset.html")
				htmlData = htmlData.replaceAll("[name]", user.firstname)
				htmlData = htmlData.replace(/\[token\]/g, pin[0])
				htmlData = htmlData.replace(/\[brand\s+name\]/g, "Octa Trade Global")

				await transporter.sendMail({
					from: "Octa Trade Global", // sender address
					to: email, // list of receivers
					subject: "Password Reset", // Subject line
					text: `Password Reset: https://dashboard.octatradeglobal.com/user/auth/password-reset?token=${pin}`, // plain text body
					html: htmlData, // html body
				})

				res.status(200).json({ status: true, message: "Email sent" })
			} else {
				res.status(200).json({ status: true, message: "Email sent" })
			}
		} catch (error) {
			console.log(error)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
