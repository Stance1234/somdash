import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import UserModel from '../../../models/user'
import NotificationModel from '../../../models/notification'

async function handler(req, res) {
    // ! Only POST mothod is accepted
    if (req.method === 'POST') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const { userId, title, msg, type } = req.body

            if(!userId || !title || !msg || !type) {
                return res.status(401).json({ status: false, message: "Enter all fields"})
            }

            const userExist = await UserModel.findById(userId)

            if(!userExist) {
                return res.status(404).json({ status: false, message: "User not found" })
            }

            const notification = await new NotificationModel({ _userId: userId, title, msg, type })

            await notification.save()

            res.status(200).json({ status: true, message: "Notification created successfully" })
        } catch(error) {
            console.log(error.message)
            res.status(500).json({ status: false, message: "Something went wrong"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;