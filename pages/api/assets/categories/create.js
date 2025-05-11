import UserModel from '../../../../models/user'
import AssetsCategoryModel from '../../../../models/assets-category'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'

async function handler(req, res) {
    // * Only POST mothod is accepted
    if (req.method === 'POST') {

        
        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const session = await getSession({ req })
            const { name } = req.body
            const email = session.user.email
            const user = await UserModel.findOne({ email })

            if(!user || !user.is_admin) {
                return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user"})
            }

            if(!name) {
                return res.status(402).json({ status: false, message: "Category name cannot be empty" })
            }


            const alreadyCategory = await AssetsCategoryModel.findOne({ name })

            if(alreadyCategory) {
                return res.status(401).json({ status: false, messsage: "Category already exist"})
            }

            const category = await new AssetsCategoryModel({ name })
            
            await category.save()
            res.status(200).json({ status: true, message: "Category added successfully", category })
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