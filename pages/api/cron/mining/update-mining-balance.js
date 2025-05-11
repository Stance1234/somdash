import mongoose from 'mongoose'
import UserMiningContractModel from '../../../../models/user-mining-contract'
import MiningContractModel from '../../../../models/mining-contract'

async function handler(req, res) {
    // ! Only PUT mothod is accepted
    if (req.method === 'PUT') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const contracts = await MiningContractModel.find({ })

            if(!contracts) res.status(404).json({ status: false, message: "No contract found"})

            for (const contract of contracts) {
                await UserMiningContractModel.updateMany({ _contractId: contract.id, status: "active" }, { $inc: { quantity: contract.growth_rate }})
            }

            res.status(200).json({ status: true, message: "Mining contracts updated successfully" })
            
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