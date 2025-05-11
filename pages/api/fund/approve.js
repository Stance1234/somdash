import FundModel from "../../../models/fund"
import UserModel from "../../../models/user"
import UserFundModel from "../../../models/user_funds"
import PaymentPurposeModel from "../../../models/payment_purpose"
import transporter from "../../../lib/mailer"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import path from "path"
import getTemplate from "../../../lib/get-email-template"

async function handler(req, res) {
	//Only POST mothod is accepted
	if (req.method === "POST") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const { transactionId } = req.body
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			const fund = await FundModel.findById(transactionId)

			if (!fund) {
				return res.status(404).json({ status: false, message: "No transaction found" })
			}

			fund.status = true

			let userFund = await UserFundModel.findOne({ _userId: fund._userId })
			const userClient = await UserModel.findById(fund._userId)

			if (!userFund) {
				userFund = await new UserFundModel({ deposit: fund.amount, _userId: fund._userId })
			} else {
				userFund.deposit += fund.amount
			}

			// const method = await PaymentMethodModel.findOne({ method: fund.method })
			const purpose = await PaymentPurposeModel.findById(fund._puposeId)
			//const fund = await new FundModel({ _userId: user._id, _puposeId: to, method, amount: usd, expires_at })

			await fund.save()
			await userFund.save()

			// TODO: send email

			// const emailLocation = path.resolve("email_temp", "deposit")
			// const host = `${process.env.NODE_ENV === "production" ? "https://" : "http://"}${req.headers.host}`
			// let htmlData = fs.readFileSync(path.join(host, "email_temp", "deposit", "request.html"), "utf-8")
			// const pathUrl = path.join(host, "email_temp", "deposit", "success.html")
			// console.log(pathUrl)
			// let response = await fetch(pathUrl)

			// let htmlData = await response.text()
			let htmlData = await getTemplate(req, "deposit", "success.html")

			htmlData = htmlData.replaceAll("[name]", userClient.firstname)
			htmlData = htmlData.replaceAll("[amount]", `$${fund.amount}`)
			htmlData = htmlData.replaceAll("[purpose]", purpose.name)
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Octa Trade Global")

			await transporter.sendMail({
				from: "Octa Trade Global", // sender address
				to: userClient.email, // list of receivers
				subject: "Payment Verified", // Subject line
				text: `Your payment of $${fund.amount}`, // plain text body
				html: htmlData, // html body
			})

			res.status(200).json({ status: true, message: "Success" })
		} catch (error) {
			// console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
