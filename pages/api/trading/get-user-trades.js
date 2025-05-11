// import FundModel from '../../../models/fund'
import UserModel from '../../../models/user'
// import PaymentPurposeModel from '../../../models/payment_purpose'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import _ from 'lodash'
// import moment from 'moment'
import UserTradingContractModel from '../../../models/trading-contract'
// import AssetModel from '../../../models/assets'

async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const email = session.user.email
            const { status } = req.query
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const contracts = await UserTradingContractModel.find({ _userId: user.id, status }).sort("-1").limit(10)

            if(!contracts.length) return res.status(404).json({ status: false, message: "No contracts found" })

            const trades = _.map(contracts, trade => _.pick(trade, ["id", "trade_value", "duration", "direction", "status", "_assetId", "gain"]))

            res.status(200).json({ status: true, message: "Success", trades })
        } catch(error) {
            // console.log(error.message)
            res.status(500).json({ status: false, message: "Something went wrong"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;