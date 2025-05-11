import CopyTraderModel from '../../../models/copy_trader'
import UserModel from '../../../models/user'
import TraderModel from '../../../models/trader'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            
            const session = await getSession({ req })
            const { _traderId } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            if(!_traderId) {
                return res.status(402).json({ status: false, message: "Specify a trader to copy" })
            }


            const trader = await TraderModel.findById(_traderId)

            if(!trader) return res.status(404).json({ status: false, message: "No trader found"})

            const alreadyCopy = await CopyTraderModel.findOne({ _userId: user._id, _traderId })

            if(alreadyCopy) return res.status(401).json({ status: false, message: "Already copied this trader"})

            const copyTrade = await new CopyTraderModel({ _userId: user._id , _traderId, trader_name: trader.name, trader_profile_img: trader.profile_img })
            
            await copyTrade.save()
            res.status(200).json({ status: true, message: "Trader copied successfully", copyTrade })
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