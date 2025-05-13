import FundModel from "../../../models/fund"
import UserModel from "../../../models/user"
import PaymentPurposeModel from "../../../models/payment_purpose"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import moment from "moment"
import transporter from "../../../lib/mailer"
import getTemplate from "../../../lib/get-email-template"

async function handler(req, res) {
	//Only POST mothod is accepted
	if (req.method === "POST") {
		mongoose.connect(process.env.MONGODB_URL)

		try {
			const session = await getSession({ req })
			const { to, method, usd } = req.body
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			if (parseInt(usd) < 500) {
				return res.status(401).json({ status: false, message: "Minimum deposit is $500" })
			}

			if (!to) {
				return res.status(402).json({ status: false, message: "Select purpose of payment" })
			}

			const purpose = await PaymentPurposeModel.findById(to)

			if (!purpose) {
				return res.status(404).json({ status: false, message: "Purpose of payment specified was no found" })
			}

			if (!method) {
				return res.status(402).json({ status: false, message: "Select method of payment" })
			}

			const expires_at = moment(Date.now()).add(30, "m")

			const fund = await new FundModel({ _userId: user._id, _puposeId: to, method, amount: usd, expires_at })

			// ! send email
			let htmlData = await getTemplate(req, "deposit", "request.html")

			htmlData = htmlData.replaceAll("[name]", user.firstname)
			htmlData = htmlData.replaceAll("[amount]", `$${usd}`)
			htmlData = htmlData.replaceAll("[purpose]", purpose.name)
			// htmlData = htmlData.replaceAll("[name of employee]", "Mrs Olivia")
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader")

			// await transporter.sendMail({
			// 	from: "Your Trader", // sender address
			// 	to: email, // list of receivers
			// 	subject: "Payment", // Subject line
			// 	text: `Your request for the payment of $${usd} for ${purpose.name} has been recieved and is been processed. Please, upload proof of payment to complete payment process.`, // plain text body
			// 	html: htmlData, // html body
			// })

			await fund.save()
			res.status(200).json({ status: true, message: "Success", fund })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong", error: error.message })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
