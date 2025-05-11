import mongoose from "mongoose"

const userTradingContractSchema = new mongoose.Schema({
	_userId: mongoose.Schema.Types.ObjectId,
	_assetId: mongoose.Schema.Types.ObjectId,
	trade_value: Number,
	status: { type: String, default: "open" },
	duration: Date,
	direction: String,
	gain: Boolean,
	created_at: { type: Date, default: Date.now },
})

const UserTradingContractModel = mongoose.models.UserTradingContract || mongoose.model("UserTradingContract", userTradingContractSchema)

export default UserTradingContractModel
