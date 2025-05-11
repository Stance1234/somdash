import TraderModel from '../../../models/trader'
import UserModel from '../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {
        
        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const { id } = req.query
            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const trader = await TraderModel.findById(id)

            if(!trader) {
                res.status(404).json({ status: false, message: "No trader found"})
            } else {

                res.status(200).json({ status: true, message: "success", trader })
            }
            
        } catch(error) {
            console.log(error.message)
            res.status(500).json({ status: false, message: "Something went wrong"})
        }

        // res.status(200).json({ status: true, message: "success"})
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;