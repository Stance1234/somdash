import mongoose from "mongoose"

const fundSchema = new mongoose.Schema({
    _userId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    method: String,
    _puposeId: mongoose.Schema.Types.ObjectId,
    // TODO: move to another model ===> proof: String,
    status: { type: Boolean, default: false },
    // TODO: move to another model ===> address: String,
    time: { type: Date, default: Date.now },
    expires_at: Date
})

const FundModel = mongoose.models.Fund || mongoose.model("Fund", fundSchema)

export default FundModel