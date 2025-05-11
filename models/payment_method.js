import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
    method: String,
    address: String,
    name: String
})

const PaymentMethodModel = mongoose.models.PaymentMethod || mongoose.model("PaymentMethod", paymentSchema)

export default PaymentMethodModel