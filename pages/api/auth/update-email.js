import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import UserModel from "../../../models/user"
import transporter from "../../../lib/mailer"
import getTemplate from "../../../lib/get-email-template"

async function handler(req, res) {
	// * Only PUT mothod is accepted
	if (req.method === "PUT") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)
			const session = await getSession({ req })
			const { email, password } = req.body
			const user = await UserModel.findOne({ email: session.user.email })

			if (!user) {
				return res.status(401).json({ status: false, message: "Invalid access" })
			}

			const valid = bcrypt.compareSync(password, user.password)

			if (!valid) {
				return res.status(401).json({ status: false, message: "Invalid user password" })
			}

			await UserModel.findOneAndUpdate({ _id: user._id }, { email })

			// let htmlData = fs.readFileSync(path.join("email_temp", "email-verification", "change.html"), "utf-8")
			let htmlData = await getTemplate(req, "email-verification", "change.html")
			htmlData = htmlData.replaceAll("[name]", user.firstname)
			// htmlData = htmlData.replaceAll("[code]", pin)
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader")

			await transporter.sendMail({
				from: "Your Trader", // sender address
				to: email, // list of receivers
				subject: "E-mail Address Changed", // Subject line
				text: `This email is to notify you that your email address was recently changed.
                If you did not change your email address, please contact admin to rectify the issue. Thank you`, // plain text body
				html: htmlData, // html body
			})

			res.status(200).json({ status: true, message: "E-mail updated successfully" })
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
