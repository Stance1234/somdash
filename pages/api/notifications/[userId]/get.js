import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import UserModel from '../../../../models/user'
import NotificationModel from '../../../../models/notification'

async function handler(req, res) {
    // * Only GET method is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const searchedUser = await UserModel.findById(userId)
            
            if(!searchedUser) {
                return res.status(404).json({ status: false, message: "No user found" })
            }

            const notifications = await NotificationModel.find({ _userId: userId }, "id title type msg created_at")

            if(!notifications.length) {
                return res.status(404).json({ status: false, message: "No notification found for this user" })
            }
            
            res.status(200).json({ status: true, message: "success", notifications })
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