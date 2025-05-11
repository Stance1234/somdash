import { getSession } from 'next-auth/react'
import UserModel from '../../../models/user'
import AssetsCategoryModel from '../../../models/assets-category'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import MiningData from '../../../components/admin/mining/mining-data'
import MiningForm from '../../../components/admin/mining/mining-form'

function Mining({ assetsCategories }) {

    return (
        <AdminLayout>
            <BreadCrump title={"Mining"} crumb={"Home mining"} />
            <MiningData />
            <MiningForm assetsCategories={assetsCategories} />
            {/* <TradersData traders={traders} />
            <TraderForm /> */}
        </AdminLayout>
    )
}

export default Mining

export async function getServerSideProps(context) {
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

    const assetsCategoriesDB = await AssetsCategoryModel.find({ })

    return {
        props: {
            assetsCategories: JSON.stringify(assetsCategoriesDB)
        }
    }
}