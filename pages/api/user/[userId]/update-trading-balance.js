import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import UserModel from '../../../../models/user'
import UserTradingFundModel from '../../../../models/trading-balance'

async function handler(req, res) {
    // * Only POST method is accepted
    if (req.method === 'POST') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const { newBalance } = req.body

            if(!newBalance) {
                return res.status(400).json({ status: false, message: "Balance cannot be empty"})
            }

            const user = await UserModel.findOne({ email: session.user.email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const searchedUser = await UserModel.findById(userId)
            
            if(!searchedUser) {
                return res.status(404).json({ status: false, message: "No user found" })
            }

            const tradingFund = await UserTradingFundModel.findOne({ _userId: userId })
            if(tradingFund) {
                tradingFund.balance = newBalance
                await tradingFund.save()
            } else {
                const newTradingFund = await new UserTradingFundModel({ _userId: userId })
                await newTradingFund.save()
            }

            
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