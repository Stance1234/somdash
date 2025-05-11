import PaymentPurposeModel from '../../../models/payment_purpose'
import UserModel from '../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        
        try {
            mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const { name, desc, id, min, max } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            if(!desc) {
                return res.status(401).json({ status: false, message: "Enter a payment purpose description"})
            }

            if(!name) {
                return res.status(402).json({ status: false, message: "Specify a name for this payment purpose" })
            }
            if(!id) {
                return res.status(402).json({ status: false, message: "Specify an ID for this payment purpose" })
            }

            const newPaymentPurpose = await new PaymentPurposeModel({ name, desc, id, min, max })
            
            await newPaymentPurpose.save()
            res.status(200).json({ status: true, message: "Payment purpose added" })
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