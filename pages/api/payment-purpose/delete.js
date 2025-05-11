import PaymentPurposeModel from '../../../models/payment_purpose'
import UserModel from '../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only DELETE mothod is accepted
    if (req.method === 'DELETE') {

        
        mongoose.connect(process.env.MONGODB_URL)
        
        
        try {
            const session = await getSession({ req })
            const { id } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const paymentPurpose = await PaymentPurposeModel.findOneAndDelete({ _id: id })
            
            if(!paymentPurpose) return res.status(404).json({ status: false, message: "Could not find item to delete" })

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