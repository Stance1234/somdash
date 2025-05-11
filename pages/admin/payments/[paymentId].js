import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import moment from 'moment'
import { BASE_IMG_URL } from '../../../config'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"


function AdminSetupPayments() {
    const router = useRouter()
    const [paymentInfo, setPaymentInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isApproving, setIsApproving] = useState(false)
    const { paymentId } = router.query

    async function approveFund() {
        try {
            setIsApproving(true)

            const response = await fetch("/api/fund/approve", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ transactionId: paymentId })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                setPaymentInfo({ ...paymentInfo, status: true })
                setIsApproving(false)
                toast.success(message)
            } else {
                throw new Error(message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {

        async function loadData() {
            try {
                setIsLoading(true)

                const response = await fetch(`/api/fund/${ paymentId }/full`)

                const data = await response.json()

                const { status, message, details } = data

                if(status === true) {

                    setPaymentInfo(details)
                    setIsLoading(false)
                } else {
                    throw new Error(message)
                }

            } catch(error) {
                setIsLoading(false)
                toast.error(error.message)
            }
        }

        loadData()

    }, [])
    return (
        <AdminLayout>
            <BreadCrump title={"Payments"} crumb={"Payment info"} />

            <div className="card" id="transcation-crypto-1">
                <div className="card-header bd-b-0">
                    <div className="d-flex">
                        <h4 className="card-title font-weight-semibold mb-0">Payment complete information</h4>
                        <p className="text-muted fs-15 ml-auto">More</p>
                    </div>
                </div>
                {/* <PaymentMethodData paymentMethods={paymentMethods} /> */}

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            {
                                isLoading ? (
                                    <center>
                                        <Oval height={30} width={30} />
                                    </center>
                                ) : (
                                    <>
                                        <ul className="list-group checked">
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>User&apos;s Name: </span> <b>{ paymentInfo.username }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Amount: </span> <b>${ paymentInfo.amount }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Created: </span> <b>{ moment(paymentInfo.created_at).format("ddd, MMM Do YYYY, h:mm a") }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Expires: </span> <b>{ moment(paymentInfo.expires_at).format("ddd, MMM Do YYYY, h:mm a") }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Purpose: </span> <b>{ paymentInfo.purpose }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Method: </span> <b>{ paymentInfo.method }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Wallet Address: </span> <b>{ paymentInfo.address }</b>
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fe fe-check mr-3 tx-13" aria-hidden="true"></i>
                                                <span>Status: </span> <b>{ paymentInfo.status ? "Completed" : "Pending" }</b>
                                            </li>
                                        </ul>
                                        {
                                            paymentInfo?.proof && (
                                                <img className='img-responsive rounded mt-3' src={`${ BASE_IMG_URL }${ paymentInfo.proof }`} />
                                            )
                                        }
                                    </>
                                )
                            }

                        </div>
                        <div className="card-footer">
                            {
                                !isLoading && (
                                    paymentInfo.status ? (
                                        <button disabled style={{ cursor: "not-allowed" }} className='btn btn-success'>Approved</button>
                                    ) : (
                                        <button onClick={approveFund} className="btn btn-info">
                                            {
                                                isApproving ? (
                                                    <Oval height={20} width={20} />
                                                ) : (
                                                    <span>Approve</span>
                                                )
                                            }
                                        </button>
                                    )
                                ) 
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <PaymentMethodForm /> */}
        </AdminLayout>
    )
}

export default AdminSetupPayments

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