import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import UserModel from '../../../../models/user'
import NotificationModel from '../../../../models/notification'

async function handler(req, res) {
    // * Only DELETE method is accepted
    if (req.method === 'DELETE') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const notification = await NotificationModel.findByIdAndDelete(userId)

            if(!notification) {
                return res.status(404).json({ status: false, message: "No notification found" })
            }
            
            res.status(200).json({ status: true, message: "Notification removed", notification })
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