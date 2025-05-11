import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import referralCodeGenerator from "referral-code-generator"

const userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	email: String,
	accept: Boolean,
	currency: String,
	password: String,
	country: String,
	dial: String,
	state: String,
	city: String,
	postcode: String,
	street: String,
	mobile: String,
	refferal: String,
	refferal_code: { type: String, default: () => referralCodeGenerator.alphaNumeric("uppercase", 3, 2) },
	signal_strength: { type: Number, default: 1 },
	img: { type: String, default: "" },
	is_admin: { type: Boolean, default: false },
	is_verified: { type: Boolean, default: false },
	temp_password: String,
})

// userSchema.plugin(bcrypt())
userSchema.pre("save", function (next) {
	const user = this
	// only hash the password if it has been modified (or is new)

	// if (user.isNew) {
	// 	const ref = referralCodeGenerator.alphaNumeric("uppercase", 3, 2)
	// 	user.refferal_code = ref
	// }

	if (!user.isModified("password")) return next()

	// generate a salt
	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err)

		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err)
			// override the cleartext password with the hashed one
			user.password = hash
			next()
		})
	})
})

const UserModel = mongoose.models.User || mongoose.model("User", userSchema)

export default UserModel
