import { useState } from 'react'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"

function AdminUsersList({ users }) {
    const [list, setList] = useState(JSON.parse(users))
    return (
        <AdminLayout>
            <BreadCrump title={"Users"} crumb={"Users list"} />
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                    <div className="card">
                        <div className="card-header border-bottom-0 pb-0">
                            <div className="d-flex justify-content-between">
                                <label className="main-content-label mb-0 pt-1">Users Table</label>
                                <div className="ml-auto float-right">
                                </div>
                            </div>
                            <p className="tx-12 tx-gray-500 mt-0 mb-2">List of users.</p>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive border userlist-table">
                                <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th className="wd-lg-20p"><span>Name</span></th>
                                            <th className="wd-lg-20p"><span>Status</span></th>
                                            <th className="wd-lg-20p">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list && list.length && list.length > 0 && list.map(item => (

                                                <tr key={ item._id }>
                                                    <td>{ item.firstname} { item.lastname }</td>
                                                    <td>{ item.is_verified ? "Verified" : "Unverified" }</td>
                                                    <td>
                                                        <Link href={`/admin/users/${ item._id }`}>
                                                            <a className='btn btn-primary'>View profile</a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminUsersList

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

    const usersList = await UserModel.find({ is_admin: false })

    return {
        props: {
            users: JSON.stringify(usersList)
        }
    }
}