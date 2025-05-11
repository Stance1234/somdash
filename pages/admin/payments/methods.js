import { getSession } from 'next-auth/react'
import UserModel from '../../../models/user'
import PaymentMethodModel from '../../../models/payment_method'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import PaymentMethodData from '../../../components/admin/payment_methods/payment-method-data'
import PaymentMethodForm from '../../../components/admin/payment_methods/payment-method-form'


function AdminSetupPayments({ paymentMethods }) {
    return (
        <AdminLayout>
            <BreadCrump title={"Payments"} crumb={"Setup payment methods"} />

            <div className="card" id="transcation-crypto-1">
                <div className="card-header bd-b-0">
                    <div className="d-flex">
                        <h4 className="card-title font-weight-semibold mb-0">Payment methods</h4>
                        <p className="text-muted fs-15 ml-auto">More</p>
                    </div>
                </div>
                <PaymentMethodData paymentMethods={paymentMethods} />

            </div>
            <PaymentMethodForm />
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

    const paymentMethods = await PaymentMethodModel.find({ })

    return {
        props: { 
            paymentMethods: JSON.stringify(paymentMethods)
        }
    }
}