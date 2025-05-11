import { getSession } from 'next-auth/react'
import _ from 'lodash'
import UserModel from '../../../models/user'
import AssetsCategoryModel from '../../../models/assets-category'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import TradesForm from '../../../components/admin/trades/trades-form'

function CreateTrade({ users, categories }) {
    return (
        <AdminLayout>
            <BreadCrump title={"Trades"} crumb={"Trades create"} />
            <TradesForm users={users} categories={categories} />
        </AdminLayout>
    )
}

export default CreateTrade

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

    const usersListDB = await UserModel.find({ is_admin: false })
    const usersList = _.map(usersListDB, user => _.pick(user, ["id", "firstname", "lastname"]))
    const categoriesDB = await AssetsCategoryModel.find({ })
    const categories = _.map(categoriesDB, category => _.pick(category, ["id", "name"]))

    return {
        props: { 
            users: usersList,
            categories
        }
    }
}