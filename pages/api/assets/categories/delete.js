import AssetsCategoryModel from '../../../../models/assets-category'
import UserModel from '../../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only DELETE mothod is accepted
    if (req.method === 'DELETE') {

        
        
        
        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const { _id } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const category = await AssetsCategoryModel.findOneAndDelete({ _id })
            
            if(!category) return res.status(404).json({ status: false, message: "Could not find item to delete" })

            res.status(200).json({ status: true, message: "success", category })
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