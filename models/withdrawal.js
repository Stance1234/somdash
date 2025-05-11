import mongoose from "mongoose"

const userWithdrawalSchema = new mongoose.Schema({
    _userId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    _balanceId: mongoose.Schema.Types.ObjectId, // mining or trading model id
    type: String, // mining, trading
    method: String, // crypto, local
    wallet_address: String,
    bank_name: String,
    account_name: String,
    account_number: Number,
    status: { type: String, default: "sent"}, // sent, pending, approved, fulfilled
    msg: { type: String, default: "Withdrawal request received and is been reviewed" },
    created_at: { type: Date, default: Date.now }
})

const UserWithdrawalModel = mongoose.models.UserWithdrawal || mongoose.model("UserWithdrawal", userWithdrawalSchema)

export default UserWithdrawalModel