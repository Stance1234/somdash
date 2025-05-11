import mongoose from "mongoose"

const copyTraderSchema = new mongoose.Schema({
    _traderId: mongoose.Schema.Types.ObjectId,
    _userId: mongoose.Schema.Types.ObjectId,
    trader_name: String,
    trader_profile_img: String
})

const CopyTraderModel = mongoose.models.CopyTrader || mongoose.model("CopyTrader", copyTraderSchema)

export default CopyTraderModel