import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import UserModel from '../../../../models/user'
import IdentityModel from '../../../../models/identity'

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

            const ids = await IdentityModel.findOne({ email: searchedUser.email })

            if(!ids) {
                return res.status(404).json({ status: false, message: "No ID's found"})
            }
            
            res.status(200).json({ status: true, message: "success", ids })
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