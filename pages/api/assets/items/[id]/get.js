import AssetModel from '../../../../../models/assets'
import UserModel from '../../../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {
        
        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const { id } = req.query
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const asset = await AssetModel.findById(id)

            
            if(!asset) return res.status(404).json({ status: false, message: "Could not find item to delete" })

            res.status(200).json({ status: true, message: "success", asset })
        } catch(error) {
            
            res.status(500).json({ status: false, message: "Something went wrong"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than GET method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;