import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import UserModel from '../../../models/user'

async function handler(req, res) {
    // * Only PUT mothod is accepted
    if (req.method === 'PUT') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })
            const { state, city, postalcode, street } = req.body
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Invalid access"})
            }

            if(!state || !city || !postalcode || !street) {
                return res.status(401).json({ status: false, message: "Please, enter all fields"})
            }

            await UserModel.findOneAndUpdate({ _id: user._id }, { state, city, postcode: postalcode, street })
            
            res.status(200).json({ status: true, message: "Address updated successfully"})
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