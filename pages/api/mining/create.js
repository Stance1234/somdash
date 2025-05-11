import UserModel from '../../../models/user'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import MiningContractModel from '../../../models/mining-contract'

async function handler(req, res) {
    // ! Only POST mothod is accepted
    if (req.method === 'POST') {

        
        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const { name, growth_rate, duration, mining_power, assetId, price } = req.body

            const contract = await new MiningContractModel({ name, growth_rate, duration, power: mining_power, _assetId: assetId, price })

            await contract.save()

            res.status(200).json({ status: true, message: "Mining contract added successfully" })

            
        } catch(error) {
            console.log(error.message)
            res.status(500).json({ status: false, message: "Something went"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;