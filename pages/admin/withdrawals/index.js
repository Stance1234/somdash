// import { getSession } from 'next-auth/react'
// import _ from 'lodash'
// import UserModel from '../../../models/user'
// import PaymentMethodModel from '../../../models/payment_method'
// import UserWithdrawalModel from '../../../models/withdrawal'
// import BreadCrump from "../../../components/admin/bread-crump"
// import AdminLayout from "../../../components/layout/adminLayout"
// import WithdrawalListData from '../../../components/admin/withdrawal/withdrawal-data'


// function AdminHandleWithdrawals({ withdrawals }) {
//     return (
//         <AdminLayout>
//             <BreadCrump title={"Withdrawals"} crumb={"Handle withdrawals"} />

//             <div className="card" id="transcation-crypto-1">
//                 <div className="card-header bd-b-0">
//                     <div className="d-flex">
//                         <h4 className="card-title font-weight-semibold mb-0">Withdrawal requests</h4>
//                         <p className="text-muted fs-15 ml-auto">More</p>
//                     </div>
//                 </div>
//                 <WithdrawalListData withdrawals={withdrawals} />

//             </div>
//         </AdminLayout>
//     )
// }

// export default AdminHandleWithdrawals

// export async function getServerSideProps(context) {
//     const session = await getSession({ req: context.req })
//     let authorized = false

    
//     const email = session.user.email
//     const user = await UserModel.findOne({ email })
//     if(session) {
//         if(user.is_admin) {
//             authorized = true
//         }
//     } 

//     if(!authorized) {
//         return {
//             redirect:{
//                 destination: "/",
//                 permanent: false
//             }
//         }
//     }

//     const withdrawalsDB = await UserWithdrawalModel.find({ }).sort("created_at")
//     const withdrawals = _.map(withdrawalsDB, withdrawal => _.pick(withdrawal, ["id", "amount", "created_at", "status", "type", "msg", "method", "_userId"]))

//     const data = []
//     for(const withdrawal of withdrawals) {
//         const withdrawalUser = await UserModel.findById(withdrawal._userId)

//         const item = {
//             id: withdrawal.id,
//             amount: withdrawal.amount,
//             status: withdrawal.status,
//             username: `${ withdrawalUser.firstname } ${ withdrawalUser.lastname }`,
//             created_at: withdrawal.created_at.toString(),
//             msg: withdrawal.msg,
//             type: withdrawal.type,
//             method: withdrawal.method
//         }

//         data.push(item)
//     }

//     const paymentMethods = await PaymentMethodModel.find({ })

//     return {
//         props: { 
//             paymentMethods: JSON.stringify(paymentMethods),
//             withdrawals: data
//         }
//     }
// }


import { getSession } from 'next-auth/react'
import _ from 'lodash'
import UserModel from '../../../models/user'
import PaymentMethodModel from '../../../models/payment_method'
import UserWithdrawalModel from '../../../models/withdrawal'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import WithdrawalListData from '../../../components/admin/withdrawal/withdrawal-data'

function AdminHandleWithdrawals({ withdrawals, paymentMethods }) {
    return (
        <AdminLayout>
            <BreadCrump title={"Withdrawals"} crumb={"Handle withdrawals"} />

            <div className="card" id="transcation-crypto-1">
                <div className="card-header bd-b-0">
                    <div className="d-flex">
                        <h4 className="card-title font-weight-semibold mb-0">Withdrawal requests</h4>
                        <p className="text-muted fs-15 ml-auto">More</p>
                    </div>
                </div>
                <WithdrawalListData 
                    withdrawals={withdrawals} 
                    paymentMethods={JSON.parse(paymentMethods)} 
                />
            </div>
        </AdminLayout>
    )
}

export default AdminHandleWithdrawals

export async function getServerSideProps(context) {
    try {
        const session = await getSession({ req: context.req })
        
        if (!session) {
            return {
                redirect: {
                    destination: "/auth/signin",
                    permanent: false
                }
            }
        }

        const user = await UserModel.findOne({ email: session.user.email }).lean()
        if (!user?.is_admin) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false
                }
            }
        }

        // Fetch withdrawals with lean() for better performance
        const withdrawalsDB = await UserWithdrawalModel.find({})
            .sort("-created_at")
            .lean()

        // Process withdrawals in parallel
        const withdrawals = await Promise.all(
            withdrawalsDB.map(async (withdrawal) => {
                const withdrawalUser = await UserModel.findById(withdrawal._userId).lean()
                
                return {
                    id: withdrawal._id.toString(),
                    amount: withdrawal.amount,
                    status: withdrawal.status,
                    username: `${withdrawalUser?.firstname || ''} ${withdrawalUser?.lastname || ''}`.trim(),
                    created_at: withdrawal.created_at?.toString() || new Date().toString(),
                    msg: withdrawal.msg || '',
                    type: withdrawal.type || 'unknown',
                    method: withdrawal.method || 'unknown',
                    withdrawal_address: withdrawal.wallet_address || null,
                    bank_name: withdrawal.bank_name || null,
                    account_name: withdrawal.account_name || null,
                    account_number: withdrawal.account_number || null,
                    userId: withdrawal._userId?.toString() || null
                }
            })
        )

        const paymentMethods = await PaymentMethodModel.find({}).lean()

        return {
            props: {
                paymentMethods: JSON.stringify(paymentMethods),
                withdrawals: withdrawals
            }
        }

    } catch (error) {
        console.error("Error in getServerSideProps:", error)
        return {
            props: {
                paymentMethods: JSON.stringify([]),
                withdrawals: []
            }
        }
    }
}