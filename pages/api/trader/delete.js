import TraderModel from '../../../models/trader'
import CopyTraderModel from '../../../models/copy_trader'
import UserModel from '../../../models/user'
import s3 from '../../../lib/s3'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // ! Only DELETE mothod is accepted
    if (req.method === 'DELETE') {
        
        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })
            const { id } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Invalid access" })
            }

            const trader = await TraderModel.findOneAndDelete({ _id: id })

            if(!trader) return res.status(404).json({ status: false, message: "Could not find item to delete" })

            await CopyTraderModel.findOneAndDelete({ _traderId: id })

            const params = {
                Bucket: process.env.S3_BUCKET,
                Key: trader.profile_img
            }

            const data = await new Promise((res, rej) => {
                s3.deleteObject(params, (err, data) => {
                    if(data) {
                        res({ status: true })
                    } else {
                        rej({ status: false })
                    }
                })
            })

            const { status } = data

            if(status === true) {
                res.status(200).json({ status: true, message: "success", trader })
            } else {
                res.status(500).json({ status: true, message: "Something went wrong deleting trader profile image from storage" })
            }
            
            // res.status(200).json({ status: true, message: "success", trader })
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