import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import UserModel from '../../../../models/user'
import UserMiningContractModel from '../../../../models/user-mining-contract'

async function handler(req, res) {
    // ! Only PUT mothod is accepted
    if (req.method === 'PUT') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const { status } = req.body
            const { contractId } = req.query

            const contract = await UserMiningContractModel.findByIdAndUpdate(contractId, { status })

            if(!contract) res.status(404).json({ status: false, message: "No contract found"})

            res.status(200).json({ status: true, message: "Mining contract status updated successfully", newStatus: status })
            
        } catch(error) {
            
            res.status(500).json({ status: false, message: "Something went"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;