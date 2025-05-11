import { getSession } from 'next-auth/react'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import TradesData from '../../../components/admin/trades/trade-data'

function Trades() {
    return (
        <AdminLayout>
            <BreadCrump title={"Trades"} crumb={"Home trades"} />
            <TradesData />
        </AdminLayout>
    )
}

export default Trades

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