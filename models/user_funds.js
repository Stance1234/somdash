import mongoose from "mongoose"

const userFundSchema = new mongoose.Schema({
    _userId: mongoose.Schema.Types.ObjectId,
    deposit: { type: Number, default: 0.0 },
    balance:  { type: Number, default: 0.0 }
})

const UserFundModel = mongoose.models.UserFund || mongoose.model("UserFund", userFundSchema)

export default UserFundModel