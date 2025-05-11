import FundModel from '../../../../models/fund'
import UserModel from '../../../../models/user'
import PaymentMethodModel from '../../../../models/payment_method'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {
        
        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const { transactionId } = req.query
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "No user found"})
            }

            const fund = await FundModel.findOne({ _id: transactionId, _userId: user._id })

            if(!fund) {
                return res.status(404).json({ status: false, message: "No transaction details found"})
            }

            const method = await PaymentMethodModel.findOne({ method: fund.method })

            if(!method) {
                return res.status(404).json({ status: false, message: "No transaction method found" })
            }
            
            const details = {
                address: method.address,
                method: method.name,
                amount: fund.amount,
                expires_at: fund.expires_at
            }


            res.status(200).json({ status: true, message: "success", details})
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