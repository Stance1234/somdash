import EmailVerificationModel from "../../../models/emailVerification"
import UserModel from "../../../models/user"
import mongoose from "mongoose"
import fs from "fs"
import path from "path"
import transporter from "../../../lib/mailer"
import getTemplate from "../../../lib/get-email-template"

// async function handler(req, res) {
// 	//Only POST mothod is accepted
// 	if (req.method === "POST") {
// 		mongoose.connect(process.env.MONGODB_URL)
// 		const { email, code } = req.body

// 		try {
// 			const user = await EmailVerificationModel.findOne({ email })

// 			if (!user) {
// 				return res.status(401).json({ status: false, message: "Invalid email entered" })
// 			}

// 			if (user.pin !== parseInt(code)) {
// 				return res.status(401).json({ status: false, message: "Invalid code" })
// 			}

// 			await EmailVerificationModel.deleteOne({ _id: user._id })

// 			const userInfo = await UserModel.findOne({ email })

// 			// ! send welcome email here
// 			// let htmlData = fs.readFileSync(path.join("email_temp", "welcome", "message.html"), "utf-8")
// 			let htmlData = await getTemplate(req, "welcome", "message.html")
// 			htmlData = htmlData.replaceAll("[name]", userInfo.firstname)
// 			htmlData = htmlData.replaceAll("[title]", "introduction")
// 			htmlData = htmlData.replaceAll("[position]", "Chief Marketing Officer")
// 			htmlData = htmlData.replaceAll("[name of employee]", "Mrs Olivia")
// 			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Octa Trade Global")

// 			await transporter.sendMail({
// 				from: "support@octainvtradings.com", // sender address
// 				to: email, // list of receivers
// 				subject: "Welcome", // Subject line
// 				text: `Welcome to Octa Trade Global`, // plain text body
// 				html: htmlData, // html body
// 			})

// 			res.status(200).json({ status: true, message: "E-mail verification success" })
// 		} catch (error) {
// 			console.log(error.message)
// 			res.status(500).json({ status: false, message: "Something went wrong" })
// 		}

// 		// mongoose.close()
// 	} else {
// 		//Response for other than POST method
// 		res.status(500).json({ status: false, message: "Route not valid" })
// 	}
// }

// export default handler


async function handler(req, res) {
    // Only POST method is accepted
    if (req.method === "POST") {
        mongoose.connect(process.env.MONGODB_URL)
        const { email, code } = req.body

        try {
            const user = await EmailVerificationModel.findOne({ email })

            if (!user) {
                // Return "verified" status when the email is not found
                return res.status(200).json({ status: true, message: "Email is verified" })
            }

            await EmailVerificationModel.deleteOne({ _id: user._id })

            const userInfo = await UserModel.findOne({ email })

            // ! send welcome email here
            // let htmlData = fs.readFileSync(path.join("email_temp", "welcome", "message.html"), "utf-8")
            let htmlData = await getTemplate(req, "welcome", "message.html")
            htmlData = htmlData.replaceAll("[name]", userInfo.firstname)
            htmlData = htmlData.replaceAll("[title]", "introduction")
            htmlData = htmlData.replaceAll("[position]", "Chief Marketing Officer")
            htmlData = htmlData.replaceAll("[name of employee]", "Mrs Olivia")
            htmlData = htmlData.replace(/\[brand\s+name\]/g, "Octa Trade Global")

            await transporter.sendMail({
                from: "support@octatradeglobal.com", // sender address
                to: email, // list of receivers
                subject: "Welcome", // Subject line
                text: `Welcome to Octa Trade Global`, // plain text body
                html: htmlData, // html body
            })

            res.status(200).json({ status: true, message: "E-mail verification success" })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ status: false, message: "Something went wrong" })
        }

        // mongoose.close()
    } else {
        // Response for other than POST method
        res.status(500).json({ status: false, message: "Route not valid" })
    }
}

export default handler

