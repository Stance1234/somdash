import mongoose from 'mongoose'
import { getSession } from 'next-auth/react'
import UserModel from '../../../../models/user'

async function handler(req, res) {
    // * Only GET method is accepted
    if (req.method === 'GET') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)
            const session = await getSession({ req })

            const { userId } = req.query
            const user = await UserModel.findOne({ email: session.user.email })

            if(!user) {
                return res.status(401).json({ status: false, message: "Unauthorized access"})
            }

            const searchedUser = await UserModel.findById(userId)
            
            if(!searchedUser) {
                return res.status(404).json({ status: false, message: "No user found" })
            }

            const res2 = await fetch("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
            const data = await res2.json()

            const index = data.findIndex( item => item.code === searchedUser.country )

            if(index > -1) {
                searchedUser.country = data[index].name
            }
            
            res.status(200).json({ status: true, message: "success", user: searchedUser})
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