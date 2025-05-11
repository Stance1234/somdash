import mongoose from "mongoose"

const userTradingFundSchema = new mongoose.Schema({
    _userId: mongoose.Schema.Types.ObjectId,
    balance:  { type: Number, default: 0.0 }
})

const UserTradingFundModel = mongoose.models.UserTradingFund || mongoose.model("UserTradingFund", userTradingFundSchema)

export default UserTradingFundModel