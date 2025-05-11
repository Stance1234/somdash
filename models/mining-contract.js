import mongoose from "mongoose"

const miningContractSchema = new mongoose.Schema({
	name: String,
	_assetId: mongoose.Schema.Types.ObjectId,
	duration: Number,
	price: Number,
	power: Number,
	growth_rate: Number,
})

const MiningContractModel = mongoose.models.MiningContract || mongoose.model("MiningContract", miningContractSchema)

export default MiningContractModel
