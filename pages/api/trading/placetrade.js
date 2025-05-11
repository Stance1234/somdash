// import FundModel from '../../../models/fund'
import UserModel from '../../../models/user'
// import PaymentPurposeModel from '../../../models/payment_purpose'
import UserTradingFundModel from '../../../models/trading-balance'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import moment from 'moment'
import UserTradingContractModel from '../../../models/trading-contract'

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const { direction, duration, trade_value, assetId } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const userTradingFund = await UserTradingFundModel.findOne({ _userId: user.id })

            if(!userTradingFund) {
                return res.status(404).json({ status: false, message: "No balance found"})
            } else if(userTradingFund.balance < 1) {
                return res.status(401).json({ status: false, message: "Fund account to place trade"})
            } else if(userTradingFund.balance < trade_value) {
                return res.status(401).json({ status: false, message: "Balance too low to place trade"})
            }

            const date = moment(new Date()).add(duration, "m")

            const contract = await new UserTradingContractModel({ _userId: user.id, trade_value, direction, duration: date, _assetId: assetId })

            // const newBalance = userTradingFund.balance - trade_value

            // await UserTradingFundModel.findOneAndUpdate({ _userId: user.id }, { balance: newBalance })

            userTradingFund.balance -= trade_value
            await userTradingFund.save()

            await contract.save()

            res.status(200).json({ status: true, message: "Success", contract})
        } catch(error) {
            
            res.status(500).json({ status: false, message: "Something went wrong"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;