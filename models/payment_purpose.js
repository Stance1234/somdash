import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
    desc: String,
    name: String,
    id: Number,
    min: Number,
    max: Number
})

const PaymentPurposeModel = mongoose.models.PaymentPurpose || mongoose.model("PaymentPurpose", paymentSchema)

export default PaymentPurposeModel