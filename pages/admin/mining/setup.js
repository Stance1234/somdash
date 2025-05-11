import { getSession } from 'next-auth/react'
import _ from 'lodash'
import UserModel from '../../../models/user'
import MiningContractModel from '../../../models/mining-contract'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import MiningSetupForm from '../../../components/admin/mining/mining-setup'

function MiningSetup({ users, contracts }) {

    return (
        <AdminLayout>
            <BreadCrump title={"Mining Setup"} crumb={"Home mining setup"} />
            <MiningSetupForm users={ users } contracts={ contracts } />
            {/* <MiningData />
            <MiningForm assetsCategories={assetsCategories} /> */}
        </AdminLayout>
    )
}

export default MiningSetup

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

    const usersDB = await UserModel.find({ is_admin: false })

    const users = _.map(usersDB, user => _.pick(user, ["id", "firstname", "lastname"]))

    // contracts

    const contractsDB = await MiningContractModel.find({ })
    const contracts = _.map(contractsDB, contract => _.pick(contract, ["id", "name"]))

    return {
        props: {
            users,
            contracts
        }
    }
}