// import FundModel from '../../../models/fund'
import UserModel from "../../../models/user"
// import PaymentPurposeModel from '../../../models/payment_purpose'
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import moment from "moment"
import UserTradingContractModel from "../../../models/trading-contract"
import AssetModel from "../../../models/assets"

async function handler(req, res) {
	// ! Only GET mothod is accepted
	if (req.method === "GET") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			const contracts = await UserTradingContractModel.find({ status: "open" }).sort("-created_at")

			if (!contracts.length) return res.status(404).json({ status: false, message: "No contracts found" })

			const data = []

			for (const contract of contracts) {
				const contractUser = await UserModel.findById(contract._userId)
				const asset = await AssetModel.findById(contract._assetId)

				const item = {
					id: contract.id,
					trader: `${contractUser.firstname} ${contractUser.lastname}`,
					asset: asset.name,
					value: contract.trade_value,
					duration: moment(contract.duration).fromNow(),
					status: contract.status,
					direction: contract.direction,
				}

				data.push(item)
			}

			res.status(200).json({ status: true, message: "Success", data })
		} catch (error) {
			res.status(500).json({ status: false, message: "Something went wrong" })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
