// import FundModel from '../../../models/fund'
import UserModel from "../../../models/user"
// import PaymentPurposeModel from '../../../models/payment_purpose'
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import UserTradingContractModel from "../../../models/trading-contract"
import UserTradingFundModel from "../../../models/trading-balance"
import AssetModel from "../../../models/assets"
import getTemplate from "../../../lib/get-email-template"
import transporter from "../../../lib/mailer"

async function handler(req, res) {
	// ! Only PUT mothod is accepted
	if (req.method === "PUT") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			const { id, type, gain: adminGain } = req.body

			const contract = await UserTradingContractModel.findById(id)
			let message = ""

			if (!contract) return res.status(404).json({ status: false, message: "contract not found" })

			const asset = await AssetModel.findById(contract._assetId)
			const userClient = await UserModel.findById(contract._userId)

			if (type === "gain") {
				const gain =
					Number(contract.trade_value) + Number(adminGain) || Number(contract.trade_value) + Math.floor(Math.random() * 500)
				// console.log(adminGain)

				await UserTradingFundModel.findOneAndUpdate({ _userId: contract._userId }, { $inc: { balance: gain } })

				const userTradingBalance = await UserTradingFundModel.findOne({ _userId: contract._userId }, ["balance"])

				message = `We are pleased to inform you that your trade for ${asset.name} on ${new Intl.DateTimeFormat("en-US").format(
					contract.created_at
				)} with a $${contract.trade_value} investment resulted in a profit. Your profit is $${gain.toFixed(
					2
				)} and you currently have a balance of $${userTradingBalance.balance.toFixed(2)}.`
			} else {
				message = `We are sorry to inform you that your trade for ${asset.name} on ${new Intl.DateTimeFormat("en-US").format(
					contract.created_at
				)} with a $${contract.trade_value} investment resulted in a lose.`
			}

			// TODO: fetch email file
			// let htmlData = fs.readFileSync(path.join("email_temp", "trade", "status.html"), "utf-8")
			let htmlData = await getTemplate(req, "trade", "status.html")

			// TODO: update email message
			htmlData = htmlData.replaceAll("[name]", userClient.firstname)
			htmlData = htmlData.replaceAll("[message]", message)
			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Your Trader")

			contract.status = "close"

			await contract.save()

			// TODO: send email
			await transporter.sendMail({
				from: "Your Trader", // sender address
				to: userClient.email, // list of receivers
				subject: "Trade status", // Subject line
				text: message, // plain text body
				html: htmlData, // html body
			})

			res.status(200).json({ status: true, message: "Success" })
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
