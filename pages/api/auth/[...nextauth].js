import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import UserModel from "../../../models/user"
import EmailVerificationModel from "../../../models/emailVerification"

export default NextAuth({
	// Configure one or more authentication providers
	callbacks: {
		async session({ session, token, user }) {
			session.accessToken = token.accessToken
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "Credentials",
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			// credentials: {
			//   username: { label: "Username", type: "text", placeholder: "jsmith" },
			//   password: {  label: "Password", type: "password" }
			// },
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				await mongoose.connect(process.env.MONGODB_URL)
				let authorize = false
				const user = await UserModel.findOne({ email: credentials.email })

				if (user) {
					const emailVerification = await EmailVerificationModel.findOne({ email: credentials.email })

					if (!emailVerification) {
						// ! That is user is verified if they don't exit in email verification database

						const valid = bcrypt.compareSync(credentials.password, user.password)
						if (valid) authorize = true
					}
				}

				if (authorize) {
					// Any object returned will be saved in `user` property of the JWT
					return { email: user.email, name: `${user.firstname} ${user.lastname}`, isAdmin: user.is_admin || false }
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
		// ...add more providers here
	],
	pages: {
		signIn: "/auth/log-in",
	},
})
