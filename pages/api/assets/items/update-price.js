import UserModel from '../../../../models/user'
import AssetModel from '../../../../models/assets'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only PATCH mothod is accepted
    if (req.method === 'PATCH') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })
            const { price, id } = req.body

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const asset = await AssetModel.findById(id)

            if(!asset) {
                return res.status(404).json({ status: false, message: "Asset not found"})
            }

            asset.price = price

            await asset.save()

            res.status(200).json({ status: true, message: "Assets updated" })
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