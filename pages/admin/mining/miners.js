import { getSession } from 'next-auth/react'
import _ from 'lodash'
import UserModel from '../../../models/user'
import MiningContractModel from '../../../models/mining-contract'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import MiningGrid from '../../../components/admin/mining/mining-grid'


function Miners({ contracts }) {

    return (
        <AdminLayout>
            <BreadCrump title={"Miners"} crumb={"Home Miners"} />
            {/* <MiningData />
            <MiningForm assetsCategories={assetsCategories} /> */}
            {/* <TradersData traders={traders} />
            <TraderForm /> */}
            <MiningGrid contracts={ contracts } />
        </AdminLayout>
    )
}

export default Miners

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

    const contractsDB = await MiningContractModel.find({ }, "id name")

    const contracts = _.map(contractsDB, contract => _.pick(contract, ["id", "name"]))

    // console.log(contracts)

    return {
        props: {
            contracts
        }
    }
}