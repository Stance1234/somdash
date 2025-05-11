import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import UserModel from '../../../../models/user'
import UserTradingFundModel from '../../../../models/trading-balance'
import UserMiningContractModel from '../../../../models/user-mining-contract'
import MiningContractModel from '../../../../models/mining-contract'
import AssetModel from '../../../../models/assets'

async function handler(req, res) {
    // * Only GET method is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const searchedUser = await UserModel.findById(userId)
            
            if(!searchedUser) {
                return res.status(404).json({ status: false, message: "No user found" })
            }

            // * Sum all funds
            let tradingBalance = 0
            let miningBalance = 0
            const tradingFund = await UserTradingFundModel.findOne({ _userId: userId })
            if(tradingFund) {
                tradingBalance += tradingFund?.balance || 0
            }

            const userMiningcontracts = await UserMiningContractModel.find({ _userId: userId })

            for (const userContract of userMiningcontracts) {
                
                const contract = await MiningContractModel.findById(userContract._contractId)
                const asset = await AssetModel.findById(contract._assetId)

                const contractValue = userContract.quantity * asset.price

                miningBalance += contractValue
            }
            
            res.status(200).json({ status: true, message: "success", trading: tradingBalance, mining: miningBalance })
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