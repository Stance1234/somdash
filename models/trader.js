import mongoose from "mongoose"

const traderSchema = new mongoose.Schema({
	type: String,
	name: String,
	win_rate: Number,
	profit_share: Number,
	profile_img: String,
	price: { type: Number, default: 500 },
})

const TraderModel = mongoose.models.Trader || mongoose.model("Trader", traderSchema)

export default TraderModel
