import UserModel from '../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import MiningContractModel from '../../../models/mining-contract'

async function handler(req, res) {
    // ! Only DELETE mothod is accepted
    if (req.method === 'DELETE') {

        
        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const { id } = req.body

            const contract = await MiningContractModel.findByIdAndRemove(id)

            // await contract.save()
            if(!contract) return res.status(404).json({ status: false, message: "No contract found" })

            res.status(200).json({ status: true, message: "Mining contract deleted successfully" })

            
        } catch(error) {
            // console.log(error.message)
            
            res.status(500).json({ status: false, message: "Something went"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;