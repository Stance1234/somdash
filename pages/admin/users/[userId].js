import { getSession } from 'next-auth/react'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import UserProfileDisplay from '../../../components/admin/user/profile'
import UserIdentityDisplay from '../../../components/admin/user/user-identity-display'
import UserCopiedTraders from '../../../components/admin/user/copied-traders'
import UserBalance from '../../../components/admin/user/balance'

function AdminUserProfile() {

    return (
        <AdminLayout>
            <BreadCrump title={"User"} crumb={"User Profile"} />
            <UserProfileDisplay />
            <UserBalance />
            <UserIdentityDisplay />
            <UserCopiedTraders />
        </AdminLayout>
    )
}

export default AdminUserProfile

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

    return {
        props: { }
    }
}