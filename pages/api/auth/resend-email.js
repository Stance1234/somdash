import mongoose from "mongoose"
import transporter from "../../../lib/mailer"
import EmailVerificationModel from "../../../models/emailVerification"
import UserModel from "../../../models/user"
import getTemplate from "../../../lib/get-email-template"

async function handler(req, res) {
	//Only POST mothod is accepted
	if (req.method === "POST") {
		mongoose.connect(process.env.MONGODB_URL)
		const { email } = req.body

		try {
			const user = await UserModel.findOne({ email })

			if (!user) return res.status(404).json({ status: false, message: "No such user found" })

			await EmailVerificationModel.deleteOne({ email })

			let pin
			let keepGuess = true
			while (keepGuess) {
				pin = Math.floor(Math.random() * 90000) + 10000

				const exist = await EmailVerificationModel.findOne({ pin })

				if (!exist) keepGuess = false
			}

			const emailVerification = await new EmailVerificationModel({ pin, email, is_verified: false })

			await emailVerification.save()

			// let htmlData = fs.readFileSync(path.join("email_temp/email-verification", "code.html"), "utf-8")
			let htmlData = await getTemplate(req, "email-verification", "code.html")
			htmlData = htmlData.replaceAll("[name]", user.firstname)
			htmlData = htmlData.replaceAll("[code]", pin)
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader")

			await transporter.sendMail({
				from: "support@yourtrade.com", // sender address
				to: email, // list of receivers
				subject: "Email verification Pin", // Subject line
				text: `PIN: ${pin}`, // plain text body
				html: htmlData, // html body
			})

			res.status(200).json({ status: true, message: "Email verification pin sent" })
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
