import mongoose from "mongoose"
import UserModel from "../../../models/user"
import { getSession } from "next-auth/react"
import AssetsCategoryModel from "../../../models/assets-category"
import AssetsItemData from "../../../components/admin/assets/assets-item-data"
import AssetsItemForm from "../../../components/admin/assets/assets-item-form"
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"


function AssetsItem({ categories }) {
    return (
        <AdminLayout>
            <BreadCrump title={"Assets"} crumb={"Assets Items - coins"} />
            <AssetsItemData categories={categories} />
            <AssetsItemForm categories={categories} />
        </AdminLayout>
    )
}

export default AssetsItem

export async function getServerSideProps(context) {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        const session = await getSession({ req: context.req })
        let authorized = false
    
        
        if(session) {
            const email = session.user.email
            const user = await UserModel.findOne({ email })
            if(user.is_admin) {
                authorized = true
            }
        } 
    
        if(!authorized) {
            return {
                redirect:{
                    destination: "/",
                    permanent: false
                }
            }
        }

        const categories = await AssetsCategoryModel.find({ })
    
        return {
            props: { 
                categories: JSON.stringify(categories)
            }
        }
    } catch (error) {
        // console.log(error)
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

}