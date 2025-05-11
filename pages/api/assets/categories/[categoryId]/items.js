import UserModel from '../../../../../models/user'
import AssetModel from '../../../../../models/assets'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {
        
        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })
            const { categoryId } = req.query

            if(!user) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const assets = await AssetModel.find({ _categoryId: categoryId })
            
            res.status(200).json({ status: true, message: "success", assets })
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