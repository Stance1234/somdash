import mongoose from "mongoose"

const paymentProofSchema = new mongoose.Schema({
    _transactionId: mongoose.Schema.Types.ObjectId,
    file: String,
    created_at: { type: Date, default: Date.now }
})

const PaymentProofModel = mongoose.models.PaymentProof || mongoose.model("PaymentProof", paymentProofSchema)

export default PaymentProofModel