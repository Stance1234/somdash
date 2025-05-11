import mongoose from "mongoose"

const emailVerificationSchema = new mongoose.Schema({
    email: String,
    pin: Number,
    is_verified: Boolean
})

const EmailVerificationModel = mongoose.models.EmailVerification || mongoose.model("EmailVerification", emailVerificationSchema)

export default EmailVerificationModel