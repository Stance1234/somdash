import { getSession } from 'next-auth/react'
import UserModel from '../../../models/user'
import PaymentPurposeModel from '../../../models/payment_purpose'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import PaymentPurposeData from '../../../components/admin/payment_methods/payment-purpose-data'
import PaymentPurposeForm from '../../../components/admin/payment_methods/payment-purpose-form'


function AdminSetupPaymentPurposes({ paymentPurposes }) {

    return (
        <AdminLayout>
            <BreadCrump title={"Payments"} crumb={"Setup payment purpose"} />

            <div className="card" id="transcation-crypto-1">
                <div className="card-header bd-b-0">
                    <div className="d-flex">
                        <h4 className="card-title font-weight-semibold mb-0">Payment purpose</h4>
                        <p className="text-muted fs-15 ml-auto">More</p>
                    </div>
                </div>
                <PaymentPurposeData paymentPurposes={paymentPurposes} />

            </div>
            <PaymentPurposeForm />
        </AdminLayout>
    )
}

export default AdminSetupPaymentPurposes

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

    const paymentPurposes = await PaymentPurposeModel.find({ })

    return {
        props: { 
            paymentPurposes: JSON.stringify(paymentPurposes)
        }
    }
}