// import FundModel from '../../../models/fund'
import UserModel from "../../../models/user"
// import PaymentPurposeModel from '../../../models/payment_purpose'
import UserTradingFundModel from "../../../models/trading-balance"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import moment from "moment"
import UserTradingContractModel from "../../../models/trading-contract"

async function handler(req, res) {
	//Only POST mothod is accepted
	if (req.method === "POST") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const { direction, duration, value: trade_value, asset: assetId, userList } = req.body
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			for (const userItem of userList) {
				// console.log(userItem.value)
				const userId = userItem.value
				const userTradingFund = await UserTradingFundModel.findOne({ _userId: userId })

				if (!userTradingFund) {
					return res.status(404).json({ status: false, message: "No balance found" + userId })
				} else if (userTradingFund.balance < 1) {
					return res.status(401).json({ status: false, message: "Fund account to place trade" })
				} else if (userTradingFund.balance < trade_value) {
					return res.status(401).json({ status: false, message: "Balance too low to place trade" })
				}

				// const date = moment(new Date()).add(duration, "m")

				const contract = await new UserTradingContractModel({ _userId: userId, trade_value, direction, duration, _assetId: assetId })

				// const newBalance = userTradingFund.balance - trade_value

				// await UserTradingFundModel.findOneAndUpdate({ _userId: user.id }, { balance: newBalance })

				userTradingFund.balance -= trade_value
				await userTradingFund.save()

				await contract.save()
			}

			res.status(200).json({ status: true, message: "Success" })
		} catch (error) {
			res.status(500).json({ status: false, message: error.message })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
