import mongoose from "mongoose"

const PasswordResetSchema = new mongoose.Schema({
	email: String,
	pin: String,
	created_at: { type: Date, default: Date.now },
})

const PasswordResetModel = mongoose.models.PasswordReset || mongoose.model("PasswordReset", PasswordResetSchema)

export default PasswordResetModel
