import UserModel from '../../../../models/user'
import SavedAssetModel from '../../../../models/saved-assets'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'


async function handler(req, res) {
    // ! Only POST mothod is accepted
    if (req.method === 'DELETE') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })
            const { assetId } = req.body

            if(!user) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            const savedAsset = await SavedAssetModel.findOne({ _userId: user.id, _assetId: assetId })

            if(!savedAsset) {
                return res.status(401).json({ status: false, message: "Assets not saved"}) 
            }

            // savedAsset = await new SavedAssetModel({ _userId: user.id, _assetId: assetId })

            await savedAsset.remove()
            
            res.status(200).json({ status: true, message: "Asset removed" })
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