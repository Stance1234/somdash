import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import _ from "lodash"
import moment from 'moment'
import MiningContractModel from '../../../../models/mining-contract'
import UserMiningContractModel from '../../../../models/user-mining-contract'
import UserModel from '../../../../models/user'
import AssetModel from '../../../../models/assets'

async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const { contractId } = req.query

            const contract = await MiningContractModel.findById(contractId)

            if(!contract) return res.status(404).json({ status: false, message: "Contract does not exist" })

            const asset = await AssetModel.findById(contract._assetId)

            if(!asset) return res.status(404).json({ status: false, message: "No asset for contract" })
            
            // TODO: load all user contract for the selected mining contract
            const userContracts = await UserMiningContractModel.find({ _contractId: contractId })

            // TODO: load user info for each user mining contract loaded
            const data = []
            for (const userContract of userContracts) {
                const contractUser = await UserModel.findById(userContract._userId)
                const expires_at = moment(userContract.expires_at).fromNow()
                const item = {
                    id: userContract.id,
                    miner: `${contractUser.firstname} ${contractUser.lastname}`,
                    balance: userContract.quantity * asset.price,
                    quantity: userContract.quantity,
                    status: userContract.status,
                    expires_at
                }

                data.push(item)
            }

            
            res.status(200).json({ status: true, message: "success", miners: data })
        } catch(error) {
            console.log(error.message)
            res.status(500).json({ status: false, message: "Something went wrong" })
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;