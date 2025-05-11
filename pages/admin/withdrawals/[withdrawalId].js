import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import commaNumber from 'comma-number'
import moment from 'moment'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import WithdrawalForm from '../../../components/admin/withdrawal/withdrawal-form'
// import WithdrawalListData from '../../../components/admin/withdrawal/withdrawal-data'


function AdminHandleWithdrawal() {
    const router = useRouter()
    const { withdrawalId } = router.query
    const [isLoading, setIsLoading] = useState(false)
    const [withdrawal, setWithdrawal] = useState({})

    async function loadWithdrawalDetails() {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/fund/withdrawal/${ withdrawalId }`)

            const data = await response.json()

            const { status, message, item } = data

            if(status === true) {
                setWithdrawal(item)
                setIsLoading(false)
            } else {
                throw new Error(message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        loadWithdrawalDetails()
    }, [])
    return (
        <AdminLayout>
            <BreadCrump title={"Withdrawal"} crumb={"User withdrawals"} />

            <div className="card" id="transcation-crypto-1">
                <div className="card-header bd-b-0">
                    <div className="d-flex">
                        <h4 className="card-title font-weight-semibold mb-0">Withdrawal request</h4>
                        <p className="text-muted fs-15 ml-auto">More</p>
                    </div>
                </div>
                {
                    isLoading ? (
                        <Oval height={30} width={30} />
                    ) : (
                        
                        <ul className="list-group checked">
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Name: </span>
                                <span className='tx-bold'>{ withdrawal.username }</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Amount: </span>
                                <span className='tx-bold'>${ commaNumber(withdrawal?.amount?.toFixed(2) || 0.00) }</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Account Type: </span>
                                <span className='tx-bold'>{ withdrawal.type }</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Method of withdrawal: </span>
                                <span className='tx-bold'>{ withdrawal.method }</span>
                            </li>
                            {
                                withdrawal.method === 'crypto' && (

                                    <li className="list-group-item">
                                        <i className="fe fe-check mr-3 tx-13"></i>
                                        <span>Wallet Address: </span>
                                        <span className='tx-bold'>{ withdrawal.address }</span>
                                    </li>
                                )
                            }
                            {
                                withdrawal.method === 'local' && (
                                    <>
                                        <li className="list-group-item">
                                            <i className="fe fe-check mr-3 tx-13"></i>
                                            <span>Bank Name: </span>
                                            <span className='tx-bold'>{ withdrawal.bank_name }</span>
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fe fe-check mr-3 tx-13"></i>
                                            <span>Account Name: </span>
                                            <span className='tx-bold'>{ withdrawal.account_name }</span>
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fe fe-check mr-3 tx-13"></i>
                                            <span>Account Number: </span>
                                            <span className='tx-bold'>{ withdrawal.account_number }</span>
                                        </li>
                                    </>
                                )
                            }
                            <hr />
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Status: </span>
                                <span className='tx-bold'>{ withdrawal.status }</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Message: </span>
                                <span className='tx-bold'>{ withdrawal.msg }</span>
                            </li>
                            <li className="list-group-item">
                                <i className="fe fe-check mr-3 tx-13"></i>
                                <span>Date: </span>
                                <span className='tx-bold'>{ moment(withdrawal.created_at).format("D/MMM/YYYY") }</span>
                            </li>
                        </ul>
                    )
                }
                {/* <WithdrawalListData withdrawals={withdrawals} /> */}
            </div>
            {
                !isLoading && <WithdrawalForm type={ withdrawal.type } />
            }
        </AdminLayout>
    )
}

export default AdminHandleWithdrawal

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    let authorized = false

    
    const email = session.user.email
    const user = await UserModel.findOne({ email })
    if(session) {
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