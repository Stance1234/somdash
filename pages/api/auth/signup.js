import UserModel from "../../../models/user"
import mongoose from "mongoose"

async function handler(req, res) {
	//Only POST mothod is accepted
	if (req.method === "POST") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const {
				firstname,
				lastname,
				email,
				password,
				confirmPassword,
				currency,
				accept,
				country,
				countryDial,
				state,
				city,
				postcode,
				street,
				mobile,
				refferal,
			} = req.body
			const user = await UserModel.findOne({ email })

			if (user) {
				return res.status(401).json({ status: false, message: "Email has already been used" })
			}

			if (password !== confirmPassword) {
				return res.status(401).json({ status: false, message: "Passwords do not match" })
			}

			if (accept !== true) {
				return res.status(402).json({ status: false, message: "You must accept terms and conditions" })
			}

			if (!firstname || firstname.trim() === "") return res.status(402).json({ status: false, message: "Enter firstname" })
			if (!lastname || lastname.trim() === "") return res.status(402).json({ status: false, message: "Enter lastname" })
			if (!street || street.trim() === "") return res.status(402).json({ status: false, message: "Enter street" })
			if (!country || country.trim() === "") return res.status(402).json({ status: false, message: "Enter country" })
			if (!state || state.trim() === "") return res.status(402).json({ status: false, message: "Enter state" })
			if (!city || city.trim() === "") return res.status(402).json({ status: false, message: "Enter city" })
			if (!mobile || mobile.trim() === "") return res.status(402).json({ status: false, message: "Enter mobile" })
			if (!email || email.trim() === "") return res.status(402).json({ status: false, message: "Enter email" })
			if (!postcode || postcode.trim() === "") return res.status(402).json({ status: false, message: "Enter postal code" })

			const newUser = await new UserModel({
				firstname,
				lastname,
				email,
				password,
				currency,
				accept,
				country,
				dial: countryDial,
				state,
				city,
				postcode,
				street,
				mobile,
				temp_password: password,
				refferal,
			})

			await newUser.save()
			res.status(200).json({ status: true, message: "signup success", newUser })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}

		// mongoose.close()
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
