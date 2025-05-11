import mongoose from "mongoose"

const userMiningContractSchema = new mongoose.Schema({
    _contractId: mongoose.Schema.Types.ObjectId,
    _userId: mongoose.Schema.Types.ObjectId,
    status: { type: String, default: "active" },
    balance: { type: Number, default: 0.0 },
    quantity: { type: Number, default: 0.0 },
    created_at: { type: Date, default: Date.now },
    expires_at: Date
})

const UserMiningContractModel = mongoose.models.UserMiningContract || mongoose.model("UserMiningContract", userMiningContractSchema)

export default UserMiningContractModel