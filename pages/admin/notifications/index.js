import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import _ from 'lodash'
import { toast } from 'react-toastify'
import moment from 'moment'
import { Oval } from 'react-loader-spinner'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"

function AdminNotifications({ users }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [userId, setUserId] = useState("")
    const [list, setList] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setIsLoading(true)
            const response = await fetch(`/api/notifications/${ userId }/get`)

            const data = await response.json()

            const { status, message, notifications } = data

            if(status === true) {
                setList(notifications)
                setIsLoading(false)
            } else {
                throw new Error(message)
            }
        } catch (error) {
            toast.error(error.message)
            setIsLoading(false)
            setList([])
        }

    }

    async function handleDelete({ id }) {

        try {
            setIsDeleting(true)
            const response = await fetch(`/api/notifications/${ id }/delete`, {
                method: "DELETE"
            })

            const data = await response.json()

            const { status, message, notification } = data

            if(status === true) {
                const tempList = list.filter(i => i._id !== notification._id)
                setList(tempList)
                setIsDeleting(false)
                toast.success(message)
            } else {
                throw new Error(message)
            }
        } catch (error) {
            toast.error(error.message)
            setIsDeleting(false)
        }

    }

    return (
        <AdminLayout>
            <BreadCrump title={"Notifications"} crumb={"Home Notifications"} />
            <div className="row mb-3">
                <div className="col-md-6">
                    <Link href="/admin/notifications/create">
                        <a className="btn btn-primary btn-ripple">Create new</a>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div>
                                <h6 className="main-content-label mb-1">Users</h6>
                                <p className="text-muted card-sub-title">
                                    Select user to view notifications sent
                                </p>
                            </div>
                            <div className="d-flex flex-column">
                                
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        value={ userId }
                                        onChange={e => setUserId(e.target.value)}
                                    >
                                        <option value="" disabled label="-- Select user --" data-select2-id="15"></option>
                                        {/* {
                                            list && list.length && list.length > 0 && list.map(item => (
                                                <option key={ item._id } value={item._id} data-select2-id={item._id}>{ item.name }</option>
                                            ))
                                        } */}
                                        {
                                            users && users.length && users.length > 0 && users.map(user => (
                                                <option key={ user.id } value={ user.id }>{ user.firstname} { user.lastname }</option>
                                            ))
                                        }
                                    </select>

                                </div>
                                <button disabled={isLoading} className="btn ripple btn-main-primary">
                                    {
                                        isLoading ? (
                                            <Oval height={20} width={20} color="#fff" />
                                        ) : (
                                            <span>Load notifications</span>
                                        )
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                list && list.length && list.length > 0 && (

                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    {
                                        list.map(({ type, msg, title, _id, created_at }) => (

                                            <div key={ _id } className={`alert alert-${ type }`}>
                                                <button disabled={isDeleting} onClick={() => handleDelete({ id: _id })} className="close">
                                                    {
                                                        isDeleting ? (
                                                            <Oval height={16} width={16} color="#000" />
                                                        ) : (

                                                            <i className="fe fe-trash"></i>
                                                        )
                                                    }
                                                </button>
                                                <h4 className='alert-heading'>{ title }</h4>
                                                <p>{ msg }</p>
                                                <small>{ moment(created_at).format("D/MM/YY") }</small>
                                            </div>
                                        ))
                                    }
                                    {/* <div className="alert alert-success">
                                        <button className="close">
                                            <i className="fe fe-trash"></i>
                                        </button>
                                        <h4 className='alert-heading'>User defined</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur velit ipsa laboriosam consequatur at tenetur quod in earum deleniti.</p>
                                        <small>12/3/20</small>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </AdminLayout>
    )
}

export default AdminNotifications

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

    return {
        props: {
            users
        }
    }
}