import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import transporter from "../../../../lib/mailer"
import UserModel from "../../../../models/user"
import getTemplate from "../../../../lib/get-email-template"

async function handler(req, res) {
	// * Only PUT method is accepted
	if (req.method === "PUT") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)
			const session = await getSession({ req })

			const { userId } = req.query
			const user = await UserModel.findOne({ email: session.user.email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Unauthorized access" })
			}

			const searchedUser = await UserModel.findById(userId)

			if (!searchedUser) {
				return res.status(404).json({ status: false, message: "No user found" })
			}

			searchedUser.is_verified = true

			await searchedUser.save()

			// TODO: get email file
			// let htmlData = fs.readFileSync(path.join("email_temp", "user", "verification.html"), "utf-8")
			let htmlData = await getTemplate(req, "user", "verification.html")
			// TODO: update email file
			htmlData = htmlData.replaceAll("[name]", searchedUser.firstname)
			// htmlData = htmlData.replaceAll("[message]", message)
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader")
			// TODO: send email to user
			await transporter.sendMail({
				from: "Your Trader", // sender address
				to: searchedUser.email, // list of receivers
				subject: "Profile Verification", // Subject line
				text: "We're happy to let you know that your profile has been verified. You can now access more of our services.", // plain text body
				html: htmlData, // html body
			})

			res.status(200).json({ status: true, message: "success" })
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
