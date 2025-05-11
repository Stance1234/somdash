import PaymentMethodModel from '../../../models/payment_method'
import UserModel from '../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {

        
        mongoose.connect(process.env.MONGODB_URL)
        
        
        try {
            const session = await getSession({ req })
            const { name, method, address } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            if(!address) {
                return res.status(401).json({ status: false, message: "Enter a wallet address"})
            }

            if(!name) {
                return res.status(402).json({ status: false, message: "Specify a name for this payment method" })
            }

            if(!method) {
                return res.status(402).json({ status: false, message: "Select method of payment" })
            }

            const newPaymentMethod = await new PaymentMethodModel({ name, method, address })
            
            await newPaymentMethod.save()
            res.status(200).json({ status: true, message: "Payment method added" })
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