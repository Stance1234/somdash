import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import UserModel from '../../../../models/user'
import CopyTraderModel from '../../../../models/copy_trader'

async function handler(req, res) {
    // * Only GET method is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const searchedUser = await UserModel.findById(userId)
            
            if(!searchedUser) {
                return res.status(404).json({ status: false, message: "No user found" })
            }

            const traders = await CopyTraderModel.find({ _userId: searchedUser.id })

            if(traders.length <= 0) {
                return res.status(404).json({ status: false, message: "No trader is copied by this user" })
            }
            
            res.status(200).json({ status: true, message: "success", traders })
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