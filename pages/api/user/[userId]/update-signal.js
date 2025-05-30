import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import UserModel from '../../../../models/user'

async function handler(req, res) {
    // * Only PUT method is accepted
    if (req.method === 'PUT') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const { signal } = req.body
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const searchedUser = await UserModel.findById(userId)
            
            if(!searchedUser) {
                return res.status(404).json({ status: false, message: "No user found" })
            }

            if(!signal) {
                return res.status(401).json({ status: false, message: "Enter signal" })
            }

            searchedUser.signal_strength = signal

            await searchedUser.save()
            
            res.status(200).json({ status: true, message: "success" })
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