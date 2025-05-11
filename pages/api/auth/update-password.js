import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import fs from "fs"
import path from "path"
import UserModel from "../../../models/user"
import transporter from "../../../lib/mailer"
import getTemplate from "../../../lib/get-email-template"

async function handler(req, res) {
	// * Only PUT mothod is accepted
	if (req.method === "PUT") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)
			const session = await getSession({ req })
			const { password, new_password, re_new_password } = req.body
			const user = await UserModel.findOne({ email: session.user.email })

			if (!user) {
				return res.status(401).json({ status: false, message: "Invalid access" })
			}

			const valid = bcrypt.compareSync(password, user.password)

			if (!valid) {
				return res.status(401).json({ status: false, message: "Invalid user password" })
			}

			if (new_password !== re_new_password) {
				return res.status(401).json({ status: false, message: "New passwords don't match" })
			}

			const hash = bcrypt.hashSync(new_password, 10)

			await UserModel.findOneAndUpdate({ _id: user._id }, { password: hash })

			// let htmlData = fs.readFileSync(path.join("email_temp", "password", "change.html"), "utf-8")
			let htmlData = await getTemplate(req, "password", "change.html")
			htmlData = htmlData.replaceAll("[name]", user.firstname)
			// htmlData = htmlData.replaceAll("[code]", pin)
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Octa Trade Global")

			await transporter.sendMail({
				from: "Octa Trade Global", // sender address
				to: email, // list of receivers
				subject: "Password changed", // Subject line
				text: `This email is to notify you that your password was recently changed.
                If you did not change your password, please contact admin to rectify this or perform a password reset. Thank you`, // plain text body
				html: htmlData, // html body
			})

			res.status(200).json({ status: true, message: "Password updated successfully" })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
