import UserModel from '../../../../../models/user'
import AssetModel from '../../../../../models/assets'
// import AssetsCategoryModel from '../../../../../models/assets-category'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import _ from 'lodash'



async function handler(req, res) {
    // ! Only GET mothod is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const email = session.user.email
            const user = await UserModel.findOne({ email })
            const { categoryId } = req.query

            if(!user) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            // const categoriesDB = await AssetsCategoryModel.find({ }).sort("name")
            // const categories = _.map(categoriesDB, category => _.pick(category, ["id", "name"]))
            const assetsDB = await AssetModel.find({ _categoryId: categoryId })
            const assets = _.map(assetsDB, asset => _.pick(asset, ["id", "name", "price", "logo", "symbol", "type"]))

            res.status(200).json({ status: true, message: "Assets added successfully", assets })
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